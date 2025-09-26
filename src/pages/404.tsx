import React, { useEffect, useRef } from 'react';

export default function ErrorPage() {
  const lineRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const lines = ['I AM', 'ERROR.', '404'];

  useEffect(() => {
    lineRefs.forEach(ref => {
      if (ref.current) ref.current.textContent = '';
    });

    let lineIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      const currentLine = lines[lineIndex];
      const el = lineRefs[lineIndex].current!;
      if (charIndex < currentLine.length) {
        el.textContent += currentLine[charIndex++];
      } else {
        lineIndex++;
        charIndex = 0;
        if (lineIndex >= lines.length) clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <main className="flex-1 relative flex items-center justify-center w-full h-full px-4">
        <div className="hidden lg:flex xl:flex relative w-full max-w-[800px] mx-auto h-full">
          <img
            src="/uploads/404.png"
            alt="404 Error - I am Error"
            className="block w-full h-full object-contain"
          />

          <div
            className="
                absolute text-left whitespace-nowrap
                text-base leading-7
                sm:text-lg sm:leading-8
                md:text-xl md:leading-9
                lg:text-2xl lg:leading-10
                xl:text-2xl xl:leading-[3rem]
            "
            style={{
                top: '23%',
                left: '55%',
                textShadow: '3px 3px 0px #2038ec',
            }}
            >
            <div ref={lineRefs[0]} />
            <div ref={lineRefs[1]} />
            <div ref={lineRefs[2]} />
          </div>
        </div>
        {/* MD layout */}
        <div className="hidden md:flex lg:hidden xl:hidden flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl text-red-500">404</h1>
          <p className="text-xl mt-2">This dojo has decayed.</p>
          <a href="/" className="mt-4 text-blue-400 underline text-lg">
            Return to Shrine
          </a>
        </div>

        {/* SM + XS layout */}
        <div className="flex md:hidden flex-col items-center justify-center h-full text-center">
          <h1 className="text-xl text-red-500">404</h1>
          <p className="text-base mt-2">Page not found.</p>
          <a href="/" className="mt-4 text-blue-400 underline text-sm">
            Go Home
          </a>
        </div>
      </main>
    </div>
  );
}
