import Icons from '../Icons'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <Icons name="rocket" />

      <S.Title>
        <S.LeftText>to</S.LeftText>

        <S.RightText>do</S.RightText>
      </S.Title>
    </S.Container>
  )
}

export default Header;