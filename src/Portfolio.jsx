import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Portfolio() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/portfolio.md`)
      .then(res => res.text())
      .then(setContent);
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6 font-sans text-gray-900 prose prose-lg">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
