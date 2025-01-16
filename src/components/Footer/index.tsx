import { FooterStyled } from "./styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
      <p>Arthur Lima {currentYear}.</p>
    </FooterStyled>
  );
};

export default Footer;
