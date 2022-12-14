import * as S from './styles';

import rocket from '../../assets/rocket.svg'

const Header = () => {
  return (
    <S.Container>
      <S.Logo src={rocket} />

      <S.Title>
        <S.LeftText>to</S.LeftText>

        <S.RightText>do</S.RightText>
      </S.Title>
    </S.Container>
  )
}

export default Header;