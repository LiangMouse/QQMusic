import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Recommond: FC<IProps> = (props) => {
  return <div>Recommond</div>;
};

export default memo(Recommond);
