import React, { memo, Suspense, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';

import request from '@/service/request';
import NavBar from './child-components/nav-bar';
interface IProps {
  children?: ReactNode;
}
const Discover: FC<IProps> = () => {
  useEffect(() => {
    request
      .post('/batchGetSongLists', {
        limit: 19,
        page: 0,
        sortId: 5,
        categoryIds: [167, 168]
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <>
      <div className="wrapper-v1">
        <NavBar />
      </div>
      <Suspense fallback="">
        <Outlet />
        {/* 二级路由内容的占位符 */}
      </Suspense>
    </>
  );
};

export default memo(Discover);
