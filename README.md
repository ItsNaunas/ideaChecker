# IdeaChecker - AI Business Idea Validator

IdeaChecker is a one-page AI tool that instantly validates business ideas with honest, brutal feedback. Built with Next.js, Tailwind CSS, and OpenAI GPT-4.

## Features

- **AI-Powered Analysis**: Uses OpenAI GPT-4 to provide comprehensive business idea validation
- **Conversational Responses**: Natural paragraph-style feedback instead of bullet points
- **Apple-Inspired Design**: Clean, dark mode interface with smooth animations
- **Project 67 Integration**: Subtle funnel to [Project 67](https://project67-six.vercel.app/) for strong ideas
- **Vercel Analytics**: Built-in analytics tracking
- **Responsive Design**: Works perfectly on desktop and mobile

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: OpenAI GPT-4 API
- **Analytics**: Vercel Analytics
- **Hosting**: Vercel (ready for deployment)

## Getting Started

### Prerequisites

- Node.js 18+ 
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ideachecker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your OpenAI API key to `.env.local`:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Required
OPENAI_API_KEY=your_openai_api_key_here

# Optional
NEXT_PUBLIC_APP_NAME=IdeaChecker
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `OPENAI_API_KEY` to Vercel environment variables
4. Deploy!

The project is already configured for Vercel deployment with:
- `vercel.json` configuration
- Vercel Analytics integration
- Optimized build settings

### Manual Deployment

```bash
npm run build
npm start
```

## API Endpoints

### POST `/api/check-idea`

Validates a business idea using OpenAI GPT-4.

**Request Body:**
```json
{
  "idea": "Your business idea description here"
}
```

**Response:**
```json
{
  "analysis": "Conversational analysis of the idea...",
  "score": 75
}
```

## Customization

### Styling
- Colors are defined in `tailwind.config.ts`
- Custom animations in `src/app/globals.css`
- Apple-inspired dark theme by default

### AI Behavior
- Modify the prompt in `/api/check-idea/route.ts`
- Adjust temperature and max_tokens for different response styles
- Change the GPT model (currently using `gpt-4o`)

### Branding
- Update the title and description in `src/app/layout.tsx`
- Modify the footer link to point to your preferred destination
- Customize the logo/header in `src/app/page.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support or questions, please open an issue on GitHub.
