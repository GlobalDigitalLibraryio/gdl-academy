import styled from '@emotion/styled';
import { misc } from '../styles';

const Main = styled.main`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  flex: 1 0 auto;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.2);
  height: fit-content;

  > div {
    max-width: ${misc.containers.large}px;
    width: 100vw;
  }
`;

export default Main;
