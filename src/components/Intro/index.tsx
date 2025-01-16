"use client";
import { useEffect, useRef, useState } from "react";
import {
  ContainerStyled,
  TitleStyled,
  SubtitleStyled,
  TextStyled,
  CursorStyled,
} from "./styled";
import CustomButton from "../CustomButton";

const Intro = () => {
  const [sentence, setSentence] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text = "Olá! Me chamo Arthur Lima!";
  const prevSentence = useRef<string | null>(null);

  useEffect(() => {
    const delay = 150;

    const animateText = () => {
      if (sentence.length < text.length && sentence !== prevSentence.current) {
        setSentence((prev) => prev + text[sentence.length]);
        prevSentence.current = sentence;
      } else {
        clearInterval(intervalId);
        setShowCursor(false);
      }
    };

    const intervalId = setInterval(animateText, delay);

    return () => clearInterval(intervalId);
  }, [sentence]);

  return (
    <ContainerStyled>
      <TitleStyled>
        {sentence}
        {showCursor && <CursorStyled>|</CursorStyled>}
      </TitleStyled>
      <SubtitleStyled>
        Project Manager | Product Manager | Front-End | IA{" "}
      </SubtitleStyled>
      <TextStyled>
        Evoluo a cada dia, transformando cada projeto em um laboratório de
        ideias, onde busco soluções criativas e eficientes.
      </TextStyled>
      <CustomButton
        as="a"
        href="/assets/cv-arthur-lima.pdf"
        download="cv-arthur-lima.pdf"
      >
        Download CV
      </CustomButton>
    </ContainerStyled>
  );
};

export default Intro;
