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

    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `You are IdeaChecker - an honest, witty business idea validator known for giving brutally honest feedback with a slightly sarcastic but helpful tone.

Analyze the following business idea and provide a comprehensive assessment. Write in conversational paragraph style, not bullet points. Include:

1. Market opportunity assessment - is there real demand?
2. Key drawbacks, risks, and potential failure points
3. Competitive landscape considerations
4. Overall verdict with a 0-100 score

Be honest but constructive. Use a tone that's slightly brutal but helpful - like a successful entrepreneur giving tough love advice to a friend.

Business idea: "${idea.trim()}"

Respond with ONLY the analysis in paragraph form, followed by a final score on a new line like this:
Score: [number]/100`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are IdeaChecker, a brutally honest but helpful business idea validator. Always respond in conversational paragraph style, be constructive but direct about problems, and end with a score.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 800,
      temperature: 0.7,
    });

    const responseText = completion.choices[0]?.message?.content || '';
    
    // Extract score from response
    const scoreMatch = responseText.match(/Score:\s*(\d+)\/100/);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 50;
    
    // Remove score line from analysis
    const analysis = responseText.replace(/\n?Score:\s*\d+\/100.*$/, '').trim();

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
