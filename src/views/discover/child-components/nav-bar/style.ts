import styled from 'styled-components';
export const NavWrapper = styled.ul`
  height: 51px;
  line-height: 51px;
  border-top: 1px solid #f2f2f2;
  padding-left: 230px;
  margin-right: -50px;
  .active {
    color: #31c27c;
  }
  .top_subnav__item {
    float: left;
    font-size: 15px;
    color: #c1c1c1;
    margin-right: 47px;
  }
  .top_subnav__link {
    display: block;
  }
`;
