import { FooterProps } from './Footer.props';
import { Htag } from '../../components/Htag/Htag';
import GitIcon from './github.svg';
import RSSchoolIcon from './rs_school_js.svg';

import cn from 'classnames';

import styles from './Footer.module.css';

export const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)}>
      <a href="https://github.com/aleksander1802" target="_blank" rel="noreferrer">
        <img className={styles.github} src={GitIcon} alt="Github icon" />
      </a>
      <Htag tag="h3">React Components © 2023 Designed by Aleksander Rudenko</Htag>
      <a href="https://rs.school/" target="_blank" rel="noreferrer">
        <img className={styles.rsschool} src={RSSchoolIcon} alt="RSSchool icon" />
      </a>
    </footer>
  );
};
