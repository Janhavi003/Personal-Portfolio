export type Project = {
  name: string; category: string; year: string; description: string; stack: string[]; accent: string; href?: string; repo?: string;
};

export const projects: Project[] = [
  { name:'Prepwise AI Interview', category:'AI · Full Stack', year:'2026', description:'An AI-powered interview preparation platform combining practice, voice interaction, generated questions and personalized feedback.', stack:['Next.js','Node.js','TypeScript','Gemini AI','Vapi AI','PostgreSQL'], accent:'violet', href:'https://prepwise-ai-interview-nu.vercel.app/', repo:'https://github.com/Janhavi003/Prepwise_ai_interview' },
  { name:'Dev Analytics', category:'Data · Product', year:'2026', description:'A developer analytics dashboard that turns coding activity and productivity metrics into a focused, interactive view.', stack:['React','APIs','Data Viz'], accent:'blue', href:'https://dev-analytics-ivory.vercel.app/', repo:'https://github.com/Janhavi003/dev-analytics' },
  { name:'Lumora', category:'Wellness · Product', year:'2026', description:'A gentle, student-friendly mental wellness companion for daily reflection, journaling, habits, emotion discovery and personalized non-medical insights.', stack:['React 19','TypeScript','Vite','TanStack Start','TanStack Router','Tailwind CSS','shadcn/ui','Bun'], accent:'green', href:'https://lumina-mind-ten.vercel.app', repo:'https://github.com/Janhavi003/Lumina_Mind' },
  { name:'AI Quote Generator', category:'AI · UI', year:'2026', description:'A responsive editorial-style experience that generates daily AI quotes and turns them into shareable visual cards.', stack:['Next.js','Tailwind CSS','AI'], accent:'rose', href:'https://daily-ai-quote-generator.vercel.app/', repo:'https://github.com/Janhavi003/ai-quote-generator' }
];
