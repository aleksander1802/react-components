import { useEffect } from 'react';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../store/store';

import { setTitle, titleHandle } from './headerSlice';

export const Header = ({ className }: HeaderProps) => {
  const headerSelector = useSelector((state: RootState) => state.header.title);

  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    const newTitle = titleHandle(location.pathname);
    dispatch(setTitle(newTitle));
  }, [dispatch, location]);

  return (
    <header className={cn(className, styles.header)}>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/form">Create card</NavLink>
      <span>{headerSelector}</span>
    </header>
  );
};
