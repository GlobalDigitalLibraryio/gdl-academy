/**
 * Part of GDL gdl-frontend.
 * Copyright (C) 2019 GDL
 *
 * See LICENSE
 */

import React from 'react';
import { fluidRange } from 'polished';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';

import View from './View';
import { misc } from '../styles';

type Props = {
  css: SerializedStyles;
  gutter?: boolean;
  size: keyof typeof misc.containers;
  children: React.ReactNode;
};

/**
 * Center content horizontally
 */
const Container = ({ gutter, size, ...props }: Props) => {
  let guts;
  if (gutter) {
    guts = size === 'small' ? smallGutterStyle : largeGutterStyle;
  }
  return (
    <View
      css={[
        guts,
        css`
          margin-left: auto;
          margin-right: auto;
          max-width: ${misc.containers[size]}px;
        `
      ]}
      size={size}
      {...props}
    />
  );
};

Container.defaultProps = {
  size: 'small',
  gutter: true
};

/**
 * Fluid gutter via media queries.
 * If the viewport is small enough, we have gutter that is via padding only.
 * If the viewport is large enough, there is no need for gutter padding at all.
 * Then there is the area between, we use a linear function to approximate the gutter size as a mix
 * of the padding and margin.
 */
const gutterFunc = (containerSize: number) =>
  fluidRange(
    [
      {
        prop: 'paddingLeft',
        fromSize: `${misc.gutter}px`,
        toSize: '0px'
      },
      {
        prop: 'paddingRight',
        fromSize: `${misc.gutter}px`,
        toSize: '0px'
      }
    ],
    `${containerSize}px`,
    `${containerSize + 2 * misc.gutter}px`
  );

const smallGutterStyle = css`
  ${gutterFunc(misc.containers.small)};
`;

const largeGutterStyle = css`
  ${gutterFunc(misc.containers.large)};
`;

export default Container;
