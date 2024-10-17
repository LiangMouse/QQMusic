import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const Home: FC<IProps> = (props) => {
  return <div>Home</div>;
};

export default memo(Home);
