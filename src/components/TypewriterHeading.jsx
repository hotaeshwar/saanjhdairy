"use client";

import { useState, useEffect } from "react";

export default function TypewriterHeading({ text, className = "", cursorClassName = "animate-pulse ml-0.5", loop = true }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textIndex % textArray.length];

  useEffect(() => {
    let timer;
    if (!isDeleting && displayText === currentText) {
      if (!loop) return;
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % textArray.length);
    } else {
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, textArray, loop]);

  const remainingText = currentText.substring(displayText.length);

  return (
    <span className={`inline ${className}`}>
      <span>{displayText}</span>
      {(!loop && displayText === currentText) ? null : <span className={cursorClassName}>|</span>}
      <span className="opacity-0 select-none pointer-events-none inline" aria-hidden="true">
        {remainingText}
      </span>
    </span>
  );
}
