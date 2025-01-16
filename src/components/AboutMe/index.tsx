"use client";
import { useRefContext } from "@/context/SectionRefsContext";
import useGenericRef from "@/hooks/useGenericRef";
import useShowAnimation from "@/hooks/useShowAnimation";
import { useEffect } from "react";
import { TextStyled } from "./styled";
import TitleSection from "../TitleSection";
import Section from "../Section";

const AboutMe = () => {
  const ref = useGenericRef<HTMLElement>();
  const { showAnimation } = useShowAnimation<HTMLElement>({ ref });
  const { registerRef } = useRefContext();

  useEffect(() => {
    registerRef(ref as React.RefObject<HTMLElement>);
  }, [registerRef, ref]);

  return (
    <Section id="aboutMe" ref={ref}>
      {showAnimation && (
        <>
          <TitleSection title="Sobre mim" />
          <TextStyled>
            Profissional com extensa experiência em gestão de projetos,
            atualmente atuando como Project Manager em desenvolvimento de
            software. Possui mestrado em Engenharia Civil e Ambiental e uma
            trajetória consolidada no Centro de Tecnologia da Informação Renato
            Archer (CTI), com foco em planejamento estratégico, elaboração de
            cronogramas, análise de dados e normatização.
          </TextStyled>
          <TextStyled>
            Atualmente, atua na área de Tecnologia da Informação, utilizando
            expertise multidisciplinar para implementar soluções inovadoras e
            eficientes. A combinação de habilidades de gestão, conhecimento
            técnico e visão estratégica garante a entrega de projetos que
            agregam valor em ambientes dinâmicos e desafiadores.
          </TextStyled>
        </>
      )}
    </Section>
  );
};

export default AboutMe;
