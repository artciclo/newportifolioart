"use client";
import styled from "styled-components";
import { fadeInAndTranslate } from "@/components/Animations";

export const FormStyled = styled.form`
  width: 100%;
  padding: 1rem;
  background-color: var(--dark-navy);
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: ${fadeInAndTranslate} 1.5s ease-in forwards;

  @media (min-width: 768px) {
    padding: 2rem;
    width: 40rem;
  }
`;

export const TitleForm = styled.h4`
  font-family: var(--font-poppins);
  font-size: 1.75rem;
  background: linear-gradient(to right, #2954a3, #c961de);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const TextForm = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContainerInputName = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;
