import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Albummall: FC<IProps> = () => {
  return <div>Albummall</div>;
};

export default memo(Albummall);
