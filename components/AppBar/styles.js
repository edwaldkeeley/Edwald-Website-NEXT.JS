import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../styles/shared/container';

export const Slider = styled(({ renderAs, ...props }) => {
  const Component = motion[renderAs] || 'div';
  return <Component {...props} />;
})`
  position: fixed;
  right: 0;
  left: 0;
  will-change: transform;
  z-index: ${({ theme }) => theme.zIndex.slider};
`;

export const Container = styled.div`
  ${containerStyles};
  position: relative;
`;

export const StyledLink = styled.a`
  display: block;
  position: absolute;
  top: 54px;
  left: auto;
  width: 150px;
  height: 33px;

  a.tip {
    border-bottom: 1px dashed;
    text-decoration: none;
  }
  a.tip:hover {
    cursor: help;
    position: relative;
  }
  a.tip span {
    display: none;
  }
  a.tip:hover span {
    border: #c0c0c0 1px dotted;
    padding: 5px 20px 5px 5px;
    display: block;
    z-index: 100;
    background: url(../images/status-info.png) #f0f0f0 no-repeat 100% 5%;
    left: 0px;
    margin: 10px;
    width: 250px;
    position: absolute;
    top: 10px;
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    width: 99px;
    height: 17px;
    top: 32px;
  `};
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 54px;
  right: 32px;
  margin: -20px;

  ${({ theme }) => theme.breakpoints.tablet`
    top: 29px;
  `};
`;
