import { useAppSelector } from '@/store';
import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { shallowEqual } from 'react-redux';
import { BannerWrapper, ModPlaylist } from './style';
interface IProps {
  children?: ReactNode;
}

const SongListBanner: FC<IProps> = () => {
  //
  const { list } = useAppSelector(
    (state) => ({
      list: state.recommend.response.data.list
    }),
    shallowEqual
  );
  function Banner() {
    return (
      <>
        <ModPlaylist>
          <ul>
            {/* 轮播前为left:0，轮播后-100% */}
            {list.map((item: any) => {
              return (
                <li key={item.dissid} className="playlist-item">
                  <div className="playlist-item-box">
                    <div className="playlist-cover mod-cover"></div>
                    <h4 className="playlist-title">
                      <span className="playlist-title-txt">
                        <a
                          href={`https://y.qq.com/n/ryqq/playlist/${item.dissid}`}
                        >
                          {item.dissname}
                        </a>
                      </span>
                    </h4>
                    <div className="playlist-other">
                      播放量: {(item.listennum / 10000).toFixed(1)}万
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </ModPlaylist>
      </>
    );
  }
  return (
    <div className="mod-bg relative">
      <BannerWrapper>
        <div className="wrapper-v1">
          {/* 标题栏， */}
          <div className="index-hd">
            <h2 className="index-tit"></h2>
          </div>
          {/* 分类 */}
          <div className="mod_index_tab">
            <a className="index_tab__item">为你推荐</a>
            <a className="index_tab__item">经典</a>
            <a className="index_tab__item">网络歌曲</a>
            <a className="index_tab__item">背景音乐</a>
            <a className="index_tab__item">官方歌单</a>
            <a className="index_tab__item">情歌</a>
          </div>
          <Banner />
        </div>
      </BannerWrapper>
    </div>
  );
};

export default memo(SongListBanner);
