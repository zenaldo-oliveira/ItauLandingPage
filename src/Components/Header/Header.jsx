import React from 'react';
import IconUser from "../../assets/icon-user.svg";


import LogoItau from "../../assets/logo.svg";

import ItemMenu from './ItemMenu';
import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.ContainerItens>
          <div>
            <S.img src={LogoItau} alt="logo itau" />
          </div>

          <S.ul>

            <S.li>
              <ItemMenu name="Para você" />
            </S.li>

            <S.li>
              <ItemMenu name="Para empresas" />
            </S.li>

            <S.li>
              <ItemMenu name="Serviços" />
            </S.li>

            <S.li>
              <ItemMenu name="Ajuda" />
            </S.li>

          </S.ul>
          <S.DivButtonAccess>
            <S.ButtonAccess>
              <img src={IconUser} alt="icon user" />
              <span>Acessar conta</span>
            </S.ButtonAccess>
          </S.DivButtonAccess>
        </S.ContainerItens>
      </S.Container>
    </S.Header>
  )
}