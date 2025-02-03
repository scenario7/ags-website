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
    <div className="flex md:flex-row flex-col py-20 md:justify-between md:px-20 items-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/agsformule1"
        data-instgrm-version="12"
      ></blockquote>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/im4cup"
        data-instgrm-version="12"
      ></blockquote>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/dukartalaf1.byags"
        data-instgrm-version="12"
      ></blockquote>
    </div>
  );
};

export default SectionEight;
