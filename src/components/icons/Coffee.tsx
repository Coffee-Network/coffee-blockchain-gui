import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as CoffeeIcon } from './images/coffee_logo.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={CoffeeIcon} viewBox="0 0 150 58" {...props} />;
}
