import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface TypingTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "li";
  delay?: number;
  speed?: number;
  className?: string;
}

const TypingTextCss = styled.h1``;

export default function TypingText({ tag = "h1", text, delay = 0, speed = 100, className }: TypingTextProps) {
  const [innerText, setInnerText] = useState<string>("");

  useEffect(() => {
    const initDelay = delay;
    let speed = 100;
    let length = 1;
    let typingIntervalId: NodeJS.Timer;
    // 시작 딜레이 타이머
    let timerId = setTimeout(() => {
      typingIntervalId = setInterval(() => {
        setInnerText(text.substring(0, length));
        length++;
        if (length > text.length) {
          clearInterval(typingIntervalId);
        }
      }, speed);
      return () => {
        clearInterval(typingIntervalId);
      };
    }, initDelay);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  return (
    <TypingTextCss className={className} as={tag}>
      {innerText}
    </TypingTextCss>
  );
}
