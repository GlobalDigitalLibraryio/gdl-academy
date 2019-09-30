import styled from '@emotion/styled';
import { mq } from '../styles';
import cover from '../images/cover.jpg';

const Cover = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 380px;
  width: 100%;
  color: white;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 41, 79, 0.7),
      rgba(0, 41, 79, 0.7)
    ),
    url(${cover});
  background-position: center;
  background-size: cover;
  ${mq({ padding: ['70px 30px', '50px 120px'] })} p {
    color: white;
  }
`;

export default Cover;
