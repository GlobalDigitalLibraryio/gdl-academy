import styled from '@emotion/styled';
import { mq } from '../styles';

const Section = styled.section<{ invert: string }>`
  display: grid;
  min-height: 380px;
  width: 100%;
  background-color: ${p => (p.invert ? '#FAFAFA' : 'white')};

  ${p =>
    p.invert &&
    'background-image: radial-gradient(#ffffff 50%, rgba(209, 209, 209, 0.3));'}
  ${p =>
    mq({
      padding: ['30px', '50px 120px'],
      gridGap: ['1em', '1em 3em'],
      gridTemplateAreas: [
        `
    'header'
    'image'
    'content'
    'button'`,
        p.invert
          ? `
    'header image'
    'content image'
    'button image'
    `
          : `
  'image header'
  'image content'
  'image button'
  `
      ]
    })};
`;

export default Section;
