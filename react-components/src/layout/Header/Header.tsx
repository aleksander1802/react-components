import { HeaderProps } from './Header.props';
import { Component } from 'react';

import cn from 'classnames';

import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export class Header extends Component<HeaderProps> {
  state = {
    title: '',
  };

  componentDidMount() {
    console.log(this.state.title);
    this.titleHandle(window.location.pathname);
  }

  titleHandle(data: string) {
    switch (data) {
      case '/':
        return this.setState({
          title: 'Main',
        });
      case '/about':
        return this.setState({
          title: 'About Us',
        });
      default:
        return '';
    }
  }

  render() {
    const { className } = this.props;
    return (
      <header
        className={cn(className, styles.header)}
        onClick={() => this.titleHandle(window.location.pathname)}
      >
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
        <span>{this.state.title}</span>
      </header>
    );
  }
}
