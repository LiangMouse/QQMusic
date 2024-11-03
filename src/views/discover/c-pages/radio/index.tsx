import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Radio: FC<IProps> = () => {
  return <div>Radio</div>;
};

export default memo(Radio);
