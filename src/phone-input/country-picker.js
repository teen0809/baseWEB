/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import BaseCountryPicker from './base-country-picker.js';
import {SIZE} from './constants.js';
import {SingleSelect as DefaultSelect} from '../select/index.js';
import {getOverrides, mergeOverrides} from '../helpers/overrides.js';
import defaultProps from './default-props.js';
import type {CountrySelectPropsT} from './types.js';

CountryPicker.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: {current: null},
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
  error: defaultProps.error,
  positive: defaultProps.positive,
  required: defaultProps.required,
};

export default function CountryPicker(props: CountrySelectPropsT) {
  const {overrides} = props;
  const baseSelectOverrides = {
    Root: {
      style: ({$theme}) => ({
        marginRight: $theme.sizing.scale300,
        width: 'auto',
      }),
    },
    ControlContainer: {
      style: ({$theme: {sizing}, ...props}) => {
        const sizeToLeftPadding = {
          [SIZE.mini]: '0',
          [SIZE.compact]: sizing.scale0,
          [SIZE.default]: sizing.scale200,
          [SIZE.large]: sizing.scale400,
        };
        const sizeToRightPadding = {
          [SIZE.mini]: sizing.scale400,
          [SIZE.compact]: sizing.scale500,
          [SIZE.default]: sizing.scale600,
          [SIZE.large]: sizing.scale700,
        };
        const styleOverride = {
          paddingLeft: sizeToLeftPadding[props.$size || SIZE.default],
          paddingRight: sizeToRightPadding[props.$size || SIZE.default],
        };
        // do not add positive and error color borders when not focused
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            ...styleOverride,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          };
        }
        return styleOverride;
      },
    },
  };

  const [Select, selectProps] = getOverrides(
    overrides.CountrySelect,
    DefaultSelect,
  );
  // $FlowFixMe
  const selectOverrides = mergeOverrides(baseSelectOverrides, {
    Dropdown: overrides.CountrySelectDropdown,
    DropdownListItem: overrides.CountrySelectDropdownListItem,
  });
  // $FlowFixMe
  selectProps.overrides = mergeOverrides(
    selectOverrides,
    // $FlowFixMe
    selectProps.overrides,
  );

  const baseOverrides = {
    FlagContainer: {
      style: ({$theme: {sizing}, ...props}) => {
        const sizeToMargin = {
          [SIZE.mini]: sizing.scale200,
          [SIZE.compact]: sizing.scale300,
          [SIZE.default]: sizing.scale400,
          [SIZE.large]: sizing.scale500,
        };
        return {
          marginRight: sizeToMargin[props.$size || SIZE.default],
        };
      },
    },
    DialCode: {
      style: ({$theme: {sizing}}) => {
        return {
          marginLeft: sizing.scale600,
        };
      },
    },
  };

  const mergedOverrides = mergeOverrides(baseOverrides, overrides);

  return (
    <BaseCountryPicker
      {...props}
      overrides={{
        ...mergedOverrides,
        CountrySelect: {
          component: Select,
          props: selectProps,
        },
      }}
    />
  );
}
