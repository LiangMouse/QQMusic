import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .mod_header {
    position: relative;
    background-color: #fff;
  }
  .content {
    height: 90px;
  }
  .section_inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
export const HeaderLeft = styled.div`
  .qqmusic_title {
    position: absolute;
    left: 0px;
    top: 22px;
  }
  .qqmusic_logo {
    width: 170px;
    height: 46px;
  }
  .mod_top_nav {
    position: absolute;
    left: 198px;
    top: 0;
  }
  .top_nav__item {
    position: relative;
    float: left;
    margin-right: -5px;
  }
  .active {
    background-color: #31c27c;
    color: #fff;
  }
  .top_nav__link {
    display: block;
    padding: 0 20px;
    line-height: 90px;
    height: 90px;
    text-align: center;
    font-size: 18px;
  }
`;
export const HeaderRight = styled.div`
  .mod_top_search {
    position: absolute;
    top: 0;
    right: 284px;
    .mod_search_input {
      border: 1px solid #c9c9c9;
      line-height: 36px;
      height: 36px;
      margin-top: 26px;
      position: relative;
      border-radius: 3px;
      background-color: #fff;
      transition: width 0.6s ease-out;
    }
  }

  .search_input__input {
    width: 218px;
    height: 36px;
    border: 0;
    font-size: 14px;
    background: transparent;
    box-shadow: none;
    transition:
      width 0.6s ease-out,
      visibility 0.6s ease-out 1ms;
  }
  .header__opt {
    position: absolute;
    top: 0;
    right: 0;
    height: 90px;
    line-height: 90px;
    .mod_top_login {
      display: block;
      font-size: 0;
      .top_login__link {
        position: relative;
        font-size: 16px;
        float: left;
        width: 38px;
        margin-right: 10px;
        text-align: center;
        height: 90px;
        .top_login__cover {
          width: 38px;
          height: 38px;
          border-radius: 90px;
          vertical-align: -14px;
          margin-top: 24px;
        }
      }
      .mod_select--open {
        width: 122px;
      }
      .mod_select {
        float: left;
        position: relative;
        height: 38px;
        font-size: 13px;
        margin-top: 24px;
      }
      .mod_select_green {
        background-color: #31c27c;
        color: #fff;
        border-color: #31c27c;
        .select__choose {
          display: block;
          line-height: 38px;
          background-color: #31c27c;
          color: #fff;
          border-color: #31c27c;
          padding: 0 15px 0 10px;
          text-align: center;
          white-space: nowrap;
          border: 1px solid #c9c9c9;
          border-radius: 3px;
        }
      }
      .mod_select--pay {
        margin-top: 24px;
        width: 83px;
        margin-left: 10px;
        .select__choose {
          display: block;
          line-height: 38px;
          padding: 0 15px 0 10px;
          text-align: center;
          white-space: nowrap;
          border: 1px solid #c9c9c9;
          border-radius: 3px;
        }
      }
    }
  }

  .select__choose::after {
    position: absolute;
    content: '';
    right: 8px;
    top: 16px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid;
  }
`;
