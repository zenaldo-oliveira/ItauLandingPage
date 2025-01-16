import React from 'react'
import CardIcon from "../../assets/icon-card.svg"
import OptionIcon from "../../assets/icon-options.svg"
import PhoneIcon from "../../assets/icon-phone.svg"
import SolucionIcon from "../../assets/icon-solutions.svg"
import ImagePhone from "../../assets/phone.png"
import ItemList from './ItemList'
import * as S from "./styles"



export default function SectionService() {
  return (
    <S.Section>
      <S.Container>
        <S.DivLeft>
          <S.Span>Serviços exclusivo</S.Span>
          <S.H2>Gerencie suas finanças sem sair de casa</S.H2>
          <S.P>
            Veja como você pode cuidar das suas finanças pelo app itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </S.P>

          <ul>
            <S.Li>

              <ItemList img={PhoneIcon} alt="phone icon"
                p="Acompanha sua conta, Fazer transferências e pagamentos de onde estiver."
              />
            </S.Li>

            <S.Li>

              <ItemList img={SolucionIcon} alt="Solution icon"
                p="Soluções de empréstimos e negociação para organizar sua finaças."
              />
            </S.Li>

            <S.Li>

              <ItemList img={OptionIcon} alt="option icon"
                p="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
              />
            </S.Li>

            <S.Li>

              <ItemList img={CardIcon} alt="card icon"
                p="Acompanhe a fatura do seu cartão de crédito e faça compras online com se cartao virtual."
              />
            </S.Li>
          </ul>

        </S.DivLeft>
      </S.Container>

      <S.DivRight>
        <S.Img src={ImagePhone} alt="iphone image" />
      </S.DivRight>
    </S.Section>
  )
}

