"use client"; // If using Next.js (for App Router)

import React, { useEffect } from "react";

const SectionEight = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/agsformule1"
        data-instgrm-version="12"
      ></blockquote>
    </div>
  );
};

export default SectionEight;
