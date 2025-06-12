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
            href = href.replace('%PUBLIC_URL%', process.env.PUBLIC_URL);
            href = href.replace('%25PUBLIC_URL%25', process.env.PUBLIC_URL); // защита от URL-энкодинга
            return <a {...props} href={href} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
