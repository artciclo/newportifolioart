import Image from "next/image";
import { ContainerStyled } from "./styled";

const ImageMe = () => {
  return (
    <ContainerStyled>
      <Image
        src="/assets/img-me.png"
        alt="Imagem de umm homem, de terno, com olhar sereno e calmo"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
        fill
        placeholder="blur"
        blurDataURL={"/assets/img-me.png"}
      />
    </ContainerStyled>
  );
};

export default ImageMe;
