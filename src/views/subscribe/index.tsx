import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Subscribe: FC<IProps> = () => {
  return <div>Subscribe</div>;
};

export default memo(Subscribe);
