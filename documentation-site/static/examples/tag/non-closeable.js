import React from 'react';
import {Tag, KIND, VARIANT} from 'baseui/tag';

const kinds = Object.keys(KIND).filter(kind => kind !== KIND.custom);
const variants = Object.keys(VARIANT);

export default () => (
  <>
    {variants.map((variant, index) => (
      <React.Fragment key={index}>
        {kinds.map((kind, index) => (
          <Tag
            key={index}
            closeable={false}
            variant={variant}
            kind={KIND[kind]}
          >
            {KIND[kind]}
          </Tag>
        ))}
        <br />
      </React.Fragment>
    ))}
  </>
);
