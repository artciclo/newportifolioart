"use client";
import { animateBorderHeight } from "@/components/Animations";
import styled from "styled-components";

export const SectionProject = styled.section<{ $position: string }>`
  margin: 2rem 0;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.$position === "right" ? "flex-end" : "flex-start"};
`;

export const ContainerInfo = styled.div<{ $position: string }>`
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => (props.$position === "right" ? "unset" : "0")};
  left: ${(props) => (props.$position === "right" ? "0" : "unset")};
  z-index: 1;
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);

  @media (min-width: 480px) {
    width: 40%;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
    justify-content: unset;
    gap: 2rem;
    background-color: transparent;
  }
`;

export const TitleProject = styled.h4`
  font-family: var(--font-poppins);
  font-size: 1rem;

  @media (min-width: 576px) {
    font-size: 1.15rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextProject = styled.p`
  font-size: 0.75rem;

  @media (min-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const LinksProject = styled.span`
  padding-inline: 0.5rem;
  background-color: transparent;
  width: max-content;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--white);
    font-family: var(--font-poppins);
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    padding: 0.65rem;

    a {
      font-size: 1.25rem;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--light-navy);
    z-index: -1;
  }

  &:hover::after {
    animation: ${animateBorderHeight} 0.5s forwards;
  }
`;

export const ContainerColorful = styled.div`
  background-color: var(--medium-navy);
  width: 80%;
  height: 250px;
  position: relative;
  cursor: pointer;
  transition: transform 0.25s linear;

  @media (min-width: 480px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    width: 70%;
    height: 500px;
  }

  &:hover {
    transform: scale(0.9);
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerImg = styled.div<{ $position: string }>`
  width: 90%;
  height: 90%;
  position: absolute;
  right: ${(props) => (props.$position === "right" ? "0" : "unset")};
  left: ${(props) => (props.$position === "right" ? "unset" : "0")};
  top: 50%;
  transform: translateY(-50%);

  img {
    object-fit: cover;
    object-position: left;
  }
`;
