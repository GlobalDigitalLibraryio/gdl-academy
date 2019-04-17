/**
 * Part of GDL gdl-frontend.
 * Copyright (C) 2019 GDL
 *
 * See LICENSE
 */

import { css } from '@emotion/core';
import { TABLET_BREAKPOINT, LARGER_TABLET_BREAKPOINT } from './misc';
/**
 * Mobile first media template
 *
 * (Also has a mobile only query)
 *
 */

// A function returning a function :)
const query = (condition: 'min' | 'max', width: number) => (
  ...args: any
) => css`
  @media (${condition}-width: ${width}px) {
    ${css(...args)};
  }
`;

const media = {
  mobile: query('max', TABLET_BREAKPOINT - 1),
  tablet: query('min', TABLET_BREAKPOINT),
  largerTablet: query('min', LARGER_TABLET_BREAKPOINT)
};

export default media;
