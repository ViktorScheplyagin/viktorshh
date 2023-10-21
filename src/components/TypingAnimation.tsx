"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

const MS_IN_SECOND = 1000;

const TypingTextAnimation = ({
  text,
  symbolsPerSec = 10,
  cursor,
  onAnimationEnd,
}: {
  text: string;
  symbolsPerSec?: number;
  cursor?: boolean;
  onAnimationEnd?: () => void;
}) => {
  const [displayText, setDisplayText] = useState("");

  const oneSymbolTimeMS = MS_IN_SECOND / symbolsPerSec;

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayText.length < text.length) {
        setDisplayText(text.substring(0, displayText.length + 1));
      } else {
        clearInterval(interval);
        onAnimationEnd && onAnimationEnd();
      }
    }, oneSymbolTimeMS);

    return () => clearInterval(interval);
  }, [displayText, text]);

  return (
    <span
      className={`${clsx(
        [
          "after:content-['']",
          "after:w-2",
          "after:h-5",
          "after:inline-block",
          "after:bg-green-500",
          "after:animate-blink",
          "after:align-text-top",
        ],
        cursor
      )}`}
    >
      {displayText}
    </span>
  );
};

export default TypingTextAnimation;
