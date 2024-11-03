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
`;
export const ModPlaylist = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: -20px;
`;
