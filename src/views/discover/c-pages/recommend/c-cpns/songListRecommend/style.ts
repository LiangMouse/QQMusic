import styled from 'styled-components';
import fontImg from 'src/assets/img/font-img.png';

export const BannerWrapper = styled.div`
  .index-hd {
    position: relative;
    padding-top: 4.16667%;
    padding-bottom: 2%;
  }
  .index-tit {
    display: block;
    margin: 0 auto;
    width: 196px;
    height: 40px;
    background-image: url(${fontImg});
    background-position: 0 0;
  }
  .mod_index_tab {
    height: 50px;
    text-align: center;
    font-size: 0;
  }
  .index_tab__item {
    display: inline-block;
    font-size: 15px;
    margin: 0 24px;
    color: #333;
    &:hover {
      color: #31c27c;
    }
    &::selection {
      color: #31c27c;
    }
  }
  &:hover .slide-action-btn {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition-property: opacity, transform, background, width;
    transition-duration: 0.5s;
  }
`;
export const ModPlaylist = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: -20px;
  > .playlist-list {
    margin-right: -20px;
  }
  .slide-list {
    position: relative;
    font-size: 0;
    width: 1250%;
    transition: 0.5s;
    .playlist-item {
      position: relative;
      width: 1.6%;
      padding-bottom: 0;
      display: inline-block;
      &::before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 100%;
        padding-bottom: 66px;
      }
      .playlist-item-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin-right: 20px;
        .playlist-cover {
          position: relative;
          display: block;
          overflow: hidden;
          padding-top: 100%;
          margin-bottom: 15px;
          .playlist-pic {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            -webkit-transform: scale(1) translateZ(0);
            -webkit-transition: -webkit-transform 0.75s;
          }
          .mod-cover-mask {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .mod-cover-icon-play {
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -35px;
            width: 70px;
            height: 70px;
            opacity: 0;
            transition:
              opacity 0.5s,
              transform 0.5s;
            background-image: url(https://y.qq.com/ryqq/static/media/cover_play.56974e6f.png?max_age=2592000);
            background-image: -webkit-image-set(
              url(https://y.qq.com/ryqq/static/media/cover_play.56974e6f.png?max_age=2592000) 1x,
              url(https://y.qq.com/ryqq/static/media/cover_play@2x.53a26efb.png?max_age=2592000)
              /* 这里的max_age是指HTTP强缓存的有效时间 */
                2x
            );
          }

          &:hover .mod-cover-mask {
            opacity: 0.5;
          }

          &:hover .mod-cover-icon-play {
            transform: scale(1.07) translateZ(0);
            transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
            opacity: 1;
          }

          .playlist-title {
            overflow: hidden;
            a {
              font-size: 14px;
              &:hover {
                color: #31c27c;
              }
            }
            .playlist-title-txt {
              float: left;
              max-width: 100%;
              font-weight: 400;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 22px;
              max-height: 44px;
              white-space: normal;
            }
          }
          .playlist-other {
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 22px;
            font-size: 14px;
          }
        }
        .playlist-title {
          overflow: hidden;
          a {
            font-size: 14px;
            &:hover {
              color: #31c27c;
            }
          }
          .playlist-title-txt {
            float: left;
            max-width: 100%;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 22px;
            max-height: 44px;
            white-space: normal;
          }
        }
        .playlist-other {
          color: #999;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 22px;
          font-size: 14px;
        }
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .mod-slide-switch {
    width: 100%;
    text-align: center;
    font-size: 0;
    .slide-switch-item {
      display: inline-block;
      width: 28px;
      height: 12px;
      padding: 0 0 26px;
      margin: 0 1px;
      background: transparent;
    }
    .slide-switch-item--current {
      .slide-switch-bg {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    .slide-switch-bg {
      display: block;
      width: 8px;
      height: 8px;
      filter: progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#19000000",endColorstr="#19000000");
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      margin: 0 auto;
    }
    .icon_txt {
      font: 0 / 0 a;
    }
  }
`;
export const BannerActionStyle = styled.div`
  .mod-slide-action,
  .slide-action {
    position: absolute;
    top: 0;
    height: 100%;
    .slide-action--left,
    .slide-action-btn--left {
      left: 0;
    }
    .slide-action--left {
      .icon-txt {
        font: 0 / 0 a;
      }
      .slide-action-arrow--left {
        left: 29px;
        background-position: -20px -120px;
      }
      .slide-action-arrow {
        position: absolute;
        top: 50%;
        margin-top: -20px;
        width: 20px;
        height: 39px;
      }
    }
    .slide-action--right {
      right: 0;
    }
  }
  .slide-action {
    width: 50%;
  }
  .mod-slide-action {
    left: 0;
    width: 100%;
    overflow: hidden;
  }
  .slide-action-btn {
    position: absolute;
    top: 50%;
    margin-top: -54px;
    width: 79px;
    height: 108px;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#14000000",endColorstr="#14000000");
    background: url(#);
    background: rgba(0, 0, 0, 0.05);
    opacity: 0;
    visibility: none;
    transition-property: opacity, transform;
    transition-duration: 0.5s;
    z-index: 4;
  }
  .slide-action-btn--left {
    transform: translateX(-100%);
  }
`;
