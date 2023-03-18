import { FooterProps } from './Footer.props';
import GitIcon from './github.svg';

import cn from 'classnames';

import styles from './Footer.module.css';

export const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)}>
      <h3>React Components © 2023 Designed by Aleksander Rudenko</h3>
      <a href="https://github.com/aleksander1802" target="_blank" rel="noreferrer">
        <img width={40} height={40} src={GitIcon} alt="Github icon" />
      </a>
    </footer>
  );
};
