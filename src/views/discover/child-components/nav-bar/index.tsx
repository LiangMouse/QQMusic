import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { NavWrapper } from './style';
import { NavLink } from 'react-router-dom';
import { discoverMenu } from '@/assets/data/local_data';
interface IProps {
  children?: ReactNode;
}
const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <ul className="mod_top_subnav">
        {discoverMenu.map((item) => {
          return (
            <div className="top_subnav__item" key={item.link}>
              <NavLink to={item.link} className="top_subnav__link">
                {item.title}
              </NavLink>
            </div>
          );
        })}
      </ul>
    </NavWrapper>
  );
};

export default memo(NavBar);
