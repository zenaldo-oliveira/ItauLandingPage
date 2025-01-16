import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto; /* Evita problemas de altura fixa */
  padding: 64px 16px; /* Padding ajustado para mobile */
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Adaptação para telas pequenas */
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1246px;
  padding: 0 16px; /* Margem interna para mobile */
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Volta para linha em telas maiores */
    justify-content: space-between;
    padding: 0 50px;
  }
`;

export const DivLeft = styled.div`
  flex: 1;
  max-width: 100%; /* Adaptação para mobile */
  margin-bottom: 32px; /* Espaço entre elementos no mobile */

  @media (min-width: 768px) {
    max-width: 594px;
    margin-bottom: 0;
  }
`;

export const Span = styled.span`
  display: block;
  font-size: 12px; /* Tamanho reduzido para mobile */
  font-weight: bold;
  text-transform: uppercase;
  color: #ec7000;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 14px; /* Tamanho normal em telas maiores */
    margin-bottom: 35px;
  }
`;

export const H2 = styled.h2`
  color: #33303e;
  font-size: 32px; /* Tamanho ajustado para mobile */
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 56px; /* Tamanho normal em telas maiores */
    line-height: 61px;
    margin-bottom: 24px;
  }
`;

export const P = styled.p`
  font-size: 14px; /* Tamanho reduzido para mobile */
  max-width: 100%; /* Adaptação para mobile */
  margin-bottom: 40px;
  color: #4e4b59;

  @media (min-width: 768px) {
    font-size: 18px; /* Tamanho normal em telas maiores */
    max-width: 554px;
    margin-bottom: 68px;
  }
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px; /* Espaçamento reduzido para mobile */
  margin-bottom: 24px;
  border-bottom: 1px solid #7a7786;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    gap: 36px; /* Espaçamento normal em telas maiores */
    margin-bottom: 36px;
    padding-bottom: 25px;
  }
`;

export const DivMascara = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const DivRight = styled.div`
  position: relative; /* Ajustado para mobile */
  width: 100%;
  height: 200px; /* Altura fixa para mobile */
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 32%;
    height: 100%;
  }
`;

export const Img = styled.img`
  max-width: 100%; /* Responsivo */
  height: auto; /* Mantém proporção */
  transform: translateX(
    0
  ); /* Removido o deslocamento para evitar cortes em telas pequenas */

  @media (min-width: 768px) {
    transform: translateX(-50%); /* Volta a translação para telas maiores */
  }
`;
