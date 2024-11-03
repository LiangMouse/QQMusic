import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
  children?: ReactNode;
}
const AppFooter: FC<IProps> = () => {
  return <div>页面底部区域</div>;
};
export default memo(AppFooter);
