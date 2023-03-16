import { HeaderProps } from './Header.props';

import cn from 'classnames';

import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = ({ className }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)}>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </header>
  );
};
