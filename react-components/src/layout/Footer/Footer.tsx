import { FooterProps } from './Footer.props';

import cn from 'classnames';

import styles from './Footer.module.css';

export const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)}>
      <h3>React Components © 2023 Designed by Aleksander Rudenko</h3>
    </footer>
  );
};
