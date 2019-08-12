import styled from '@emotion/styled';

import { mq } from '../styles';

const Grid = styled.div`
  display: grid;
  align-content: center;
  min-height: 380px;
  background-color: #fafafa;
  ${mq({
    gridTemplateColumns: ['inherit', '1fr 1fr'],
    gridTemplateRows: ['1fr 1fr', 'inherit']
  })}
  p {
    ${mq({ margin: ['10px 0', 15] })}
  }
`;

export default Grid;
