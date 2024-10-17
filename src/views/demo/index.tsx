import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  name?: string;
  children?: ReactNode;
  age?: number;
}
const Download: FC<IProps> = (props) => {
  return (
    <div>
      <div>{props.children}</div>
      <div>{props.age}</div>
      <div>{props.name}</div>
    </div>
  );
};

export default memo(Download);
