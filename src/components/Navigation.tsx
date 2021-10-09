import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface IState { 
  symbols: string[],
  login: boolean,
}

const Navigation = () => {

  const login = useSelector((state: IState) => state?.login)

  return (
    <StyledDiv>
      <StyledLink to='/'>Home</StyledLink>
      {login === true ? <StyledLink to='/favorites'>Favorites</StyledLink> : null}
    </StyledDiv>
  )
}

export default Navigation

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: black;
`

const StyledDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 15px;
`