import { useAppSelector } from '@/store';
import React, { memo, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { shallowEqual } from 'react-redux';
import { BannerWrapper, ModPlaylist, BannerActionStyle } from './style';
import { formatImgSize } from '@/utils/format-utils';
interface IProps {
  children?: ReactNode;
}

const SongListRecommend: FC<IProps> = () => {
  //
  const { list } = useAppSelector(
    (state) => ({
      list: state.recommend.response.data.list
    }),
    shallowEqual
  );
  function SongsListContent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const keyButton = [0, 1, 2, 3, 4];
    return (
      <>
        <ModPlaylist>
          <ul className="playlist-list slide-list" style={{ left: '0%' }}>
            {/* 轮播前为left:0，轮播后-100% */}
            {list.map((item: any) => {
              return (
                <li key={item.dissid} className="playlist-item">
                  <div className="playlist-item-box">
                    <div className="playlist-cover mod-cover">
                      <a
                        href={`https://y.qq.com/n/ryqq/playlist/${item.dissid}`}
                      >
                        <img
                          src={formatImgSize(item.imgurl, 300)}
                          alt={item.dissname}
                          className="playlist-pic"
                        />
                        <i className="mod-cover-mask"></i>
                        <i className="mod-cover-icon-play"></i>
                      </a>
                    </div>
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
          <div className="mod-slide-switch">
            {keyButton.map((item) => {
              return (
                <a
                  key={item}
                  onClick={() => setCurrentIndex(item)}
                  className={`slide-switch-item ${currentIndex === item ? 'slide-switch-item--current' : ''}`}
                >
                  <i className="slide-switch-bg"></i>
                  <i className="icon-txt">{item}</i>
                </a>
              );
            })}
          </div>
        </ModPlaylist>
      </>
    );
  }
  function BannerAction() {
    return (
      <BannerActionStyle>
        <div className="mod-slide-action">
          <div className="slide-action--left slide-action">
            {/* <a className="slide-action-btn slide-action-btn--left"> */}
            <i className="icon-txt">上一页</i>
            <i className="slide-action-arrow slide-action-arrow--left sprite"></i>
            {/* </a> */}
          </div>
          <div className="slide-action--right"></div>
        </div>
      </BannerActionStyle>
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
          <SongsListContent />
        </div>
        <BannerAction />
      </BannerWrapper>
    </div>
  );
};

export default memo(SongListRecommend);
