import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import headerTitles from '@/assets/data/header_titles.json';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link} className="top_nav__link">
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} className="top_nav__link">
          {item.title}
        </a>
      );
    }
  }
  return (
    <HeaderWrapper>
      <div className="section_inner">
        <div className="content ">
          <HeaderLeft>
            <h1 className="qqmusic_title">
              <a href="/">
                <img
                  src="//y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000"
                  alt="QQ音乐"
                  className="qqmusic_logo"
                />
              </a>
            </h1>
            <ul className="mod_top_nav">
              {headerTitles.map((item) => {
                return (
                  <li className="top_nav__item" key={item.title}>
                    {showItem(item)}
                  </li>
                );
              })}
            </ul>
          </HeaderLeft>
          <HeaderRight>
            <div className="mod_top_search" role="search">
              <div className="mod_search_input">
                <Input
                  className="search_input__input"
                  size="large"
                  placeholder="搜索音乐、MV、歌单、用户"
                  suffix={<SearchOutlined />}
                />
              </div>
              {/* 点击后出现热搜 */}
            </div>
            <div className="header__opt">
              <span className="mod_top_login">
                <Link to="/mine" className="top_login__link">
                  <img
                    src="http://thirdqq.qlogo.cn/g?b=sdk&k=kn9cic9Sjjme5kBvq8Ldqbw&s=140&t=1665327720"
                    alt="当前用户"
                    className="top_login__cover"
                  />
                </Link>
                <div className="mod_select mod_select--open mod_select_green">
                  <a className="select__choose">开通VIP</a>
                </div>
                <div className="mod_select mod_select--pay">
                  <a className="select__choose">充值</a>
                </div>
              </span>
            </div>
          </HeaderRight>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
