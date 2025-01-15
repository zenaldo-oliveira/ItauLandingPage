import styled from "styled-components";
import Background from "../../assets/bg-hero.jpg";

// Definição de cores
const logoColor = "#007BFF"; // Azul
const hoverBackground = "rgba(255, 255, 255, 0.1)"; // Fundo levemente branco no hover

export const Section = styled.section`
  background-image: url(${Background});
  width: 100%;
  height: 704px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center; /* Centraliza verticalmente o conteúdo */

  @media (max-width: 768px) {
    height: 600px; /* Reduz a altura em telas menores */
  }

  @media (max-width: 480px) {
    height: auto; /* Permite altura fluida em telas muito pequenas */
    padding: 20px; /* Adiciona espaçamento interno */
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente os itens */
  justify-content: space-between; /* Espaço entre os dois lados */
  width: 100%;
  max-width: 1246px;
  padding: 0 50px;
  margin: 0 auto; /* Centraliza horizontalmente */

  @media (max-width: 768px) {
    flex-direction: column; /* Coloca os elementos em coluna */
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 0 20px; /* Reduz o padding em telas menores */
  }
`;

export const DivLeft = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column; /* Mantém o texto empilhado */
  gap: 16px; /* Espaçamento entre os elementos */

  @media (max-width: 768px) {
    max-width: 100%; /* Garante que ocupe toda a largura */
    text-align: center; /* Centraliza o texto */
  }
`;

export const H1 = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 48px; /* Reduz o tamanho em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 32px; /* Reduz ainda mais em telas muito pequenas */
  }
`;

export const P = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  max-width: 408px;

  @media (max-width: 768px) {
    font-size: 16px; /* Ajusta o tamanho da fonte */
    max-width: 100%; /* Permite que o texto use toda a largura */
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ImageRight = styled.img`
  flex: 1;
  max-width: 600px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80%; /* Reduz o tamanho da imagem */
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${hoverBackground};
    color: ${logoColor};
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Reduz o tamanho do texto no botão */
    padding: 8px 16px; /* Ajusta o padding */
  }
`;

export const DivButtons = styled.div`
  background-color: transparent;
  margin-bottom: 96px;
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column; /* Coloca os botões em coluna */
    align-items: center; /* Centraliza os botões */
    margin-bottom: 40px;
  }
`;

export const ButtonExplorer = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px; /* Reduz o espaçamento entre texto e ícone */
  }
`;

export const Span = styled.span`
  color: white;
  font-weight: bold;
`;

export const ImageWoman = styled.img`
  margin-right: 41px;

  @media (max-width: 480px) {
    margin-right: 0; /* Remove margem em telas pequenas */
    width: 80%; /* Ajusta largura */
  }
`;
