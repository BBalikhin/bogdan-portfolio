import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Portfolio() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/portfolio.md`)
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6 font-sans text-gray-900 prose prose-lg">
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => {
            let href = props.href || '';
            // Принудительно заменяем %PUBLIC_URL% на /bogdan-portfolio
            if (href.includes('%PUBLIC_URL%') || href.includes('%25PUBLIC_URL%25')) {
              href = href.replace(/%PUBLIC_URL%|%25PUBLIC_URL%25/g, '/bogdan-portfolio');
            }
            return <a {...props} href={href} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
