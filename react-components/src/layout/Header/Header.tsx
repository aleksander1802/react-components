import { useEffect, useState } from 'react';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header = ({ className }: HeaderProps) => {
  const initialValue = '';

  const [title, setTitle] = useState(initialValue);

  const location = useLocation();

  useEffect(() => {
    titleHandle(location.pathname);
  }, [location]);

  const titleHandle = (data: string) => {
    switch (data) {
      case '/':
        return setTitle('Main');
      case '/about':
        return setTitle('About Us');
      case '/form':
        return setTitle('Create card');
      default:
        return '';
    }
  };

  return (
    <header className={cn(className, styles.header)} onClick={() => titleHandle(location.pathname)}>
      <NavLink to="/" role="link">
        Main
      </NavLink>
      <NavLink to="/about" role="link">
        About
      </NavLink>
      <NavLink to="/form" role="link">
        Create card
      </NavLink>
      <span>{title}</span>
    </header>
  );
};
