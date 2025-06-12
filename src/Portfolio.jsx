import ReactMarkdown from 'react-markdown';
import portfolioContent from './content/portfolio.md?raw';

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 font-sans text-gray-900 prose prose-lg">
      <ReactMarkdown>{portfolioContent}</ReactMarkdown>
    </main>
  );
}
