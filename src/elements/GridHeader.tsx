import styled from '@emotion/styled';
import { mq } from '../styles';

const GridHeader = styled.div`
  display: flex;
  ${mq({ flexDirection: ['row', 'column'] })};
  justify-content: center;
  align-items: center;
`;

export default GridHeader;
