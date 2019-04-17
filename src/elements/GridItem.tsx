import styled from '@emotion/styled';
import { mq } from '../styles';

const GridItem = styled.div<{ divider: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  ${p =>
    mq({
      padding: ['30px', '5px 50px'],
      borderRight: [p.divider ? '1px solid #e5e5e5' : 'inherit']
    })};
  p {
    ${mq({ textAlign: ['start', 'center'] })};
  }
`;

export default GridItem;
