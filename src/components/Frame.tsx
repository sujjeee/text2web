import React from 'react';

interface TestProps {
  html: string;
  css: string;
  js: string;
}
const Frame = ({ html, css, js }: TestProps) => {

  const srcDoc = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `;

  return (
    <>
      <div className="max-w-6xl w-full flex justify-center items-center">
        <iframe id="frame" srcDoc={srcDoc} width="100%" height="700" className='rounded-5xl' />
      </div>
    </>
  );
};

export default Frame;
