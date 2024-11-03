import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Mvlist: FC<IProps> = () => {
  return <div>Mvlist</div>;
};

export default memo(Mvlist);
