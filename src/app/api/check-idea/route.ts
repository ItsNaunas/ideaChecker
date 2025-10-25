import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

export async function POST(request: NextRequest) {
  try {
    const { idea } = await request.json();

    if (!idea || typeof idea !== 'string' || idea.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a detailed business idea (at least 10 characters)' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy-key-for-build' || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please add your real API key to .env.local file.' },
        { status: 500 }
      );
    }

    const prompt = `You are a Business Idea Checker AI. Your job is to brutally, honestly, and realistically evaluate a business idea based on market potential, demand, competition, and feasibility.

Business idea: "${idea.trim()}"

Instructions:

1. CORE EVALUATION:
   - Summarize the idea clearly
   - Explain why it is realistic or not
   - Include major challenges or limitations

2. MARKET OPPORTUNITY (TAM/SAM/SOM):
   - Total Addressable Market (TAM) in the UK
   - Serviceable Available Market (SAM) relevant to the idea
   - Serviceable Obtainable Market (SOM) — realistic % of SAM that could be captured in first year and corresponding revenue

3. TIME & EFFORT:
   - Realistic time commitment per week to launch
   - Estimate how long until comfortable momentum/early results

4. COMPETITION:
   - Mention major competitors and what makes this idea different

5. RATING:
   - Give a genuine rating out of 10 based on all factors
   - Provide clear reasoning for the rating

6. CLOSING TONE (match to rating):
   - Rating 7.0-10: "This is a seriously strong idea - you've uncovered something with real potential. With the right strategy and execution, this could genuinely turn into a 6–7 figure business.

You've passed one of the toughest filters - most ideas don't make it this far. Now it's all about taking action before someone else does.

The concept is strong - execution will decide how big it gets. Don't sit on this. Move fast, refine, and make it real."
   
   - Rating 4.0-6.9: "This idea has real potential — but it's not there yet. You're close to something workable, but the market, competition, or execution risk means it needs refining before it can hit 6–7 figures. Don't scrap it — sharpen it. With the right angle or positioning, this could become something serious."
   
   - Rating 0.0-3.9: "This idea doesn't hold up right now. The market is either too saturated, unprofitable, or unrealistic to execute at scale. It might sound harsh, but that's the point — better to find out here than spend years chasing something that won't move. If you're serious about building something real, refine it or submit a stronger one — you'll know when it clicks."

Format: Write in conversational paragraph style. Be concise and readable (single-page style). Avoid full next steps, marketing strategy, content creation ideas, or operational advice. Focus only on validation.

End with: Score: [rating]/10`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a Business Idea Checker AI. Brutally validate business ideas with structured, actionable feedback. Include TAM/SAM/SOM, time/effort, competition, and rating out of 10. Match tone to rating: inspiring for strong ideas (7-10), constructive for middle (4-6.9), direct for weak (0-3.9). Be concise and realistic.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const responseText = completion.choices[0]?.message?.content || '';
    
    // Extract score from response (now out of 10)
    const scoreMatch = responseText.match(/Score:\s*(\d+(?:\.\d+)?)\/10/);
    const score = scoreMatch ? parseFloat(scoreMatch[1]) : 5;
    
    // Remove score line from analysis
    const analysis = responseText.replace(/\n?Score:\s*\d+(?:\.\d+)?\/10.*$/, '').trim();

    return NextResponse.json({
      analysis,
      score
    });

  } catch (error) {
    console.error('Error analyzing idea:', error);
    
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'Invalid OpenAI API key' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to analyze idea. Please try again.' },
      { status: 500 }
    );
  }
}
