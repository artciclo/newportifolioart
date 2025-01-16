{
  /*import Image from "next/image";*/
}
import { ContainerImgStyled, ContainerLogoStyled } from "./styled";

const Logo = () => {
  return (
    <ContainerLogoStyled>
      <ContainerImgStyled>
        {/*<Image
          src="/assets/logo.png"
          fill
          sizes="(max-width: 992px) 15vw, 10vw"
          alt="Logo portfolio Arthur Lima"
          placeholder="blur"
          blurDataURL={"/assets/logo.png"}
        />*/}
      </ContainerImgStyled>
      <h2>Arthur Lima</h2>
    </ContainerLogoStyled>
  );
};

export default Logo;
