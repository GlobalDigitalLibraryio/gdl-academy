import styled from '@emotion/styled';
import { mq, colors } from '../styles';

const Cover = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 380px;
  width: 100%;
  color: white;
  background-color: ${colors.primary};
  ${mq({ padding: ['70px 30px', '50px 120px'] })} p {
    color: white;
  }
`;

export default Cover;
