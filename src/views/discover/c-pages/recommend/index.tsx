import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBannerDataAction } from './store/recomend';
import { AppDispatch } from '@/store';
import SongListRecommend from './c-cpns/songListRecommend';

interface IProps {
  children?: ReactNode;
}
const Recommond: FC<IProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  // 发起获取歌单的请求
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return (
    <div>
      <SongListRecommend />
    </div>
  );
};

export default memo(Recommond);
