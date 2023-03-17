import { SearchProps } from './Search.props';

import cn from 'classnames';
import { Component } from 'react';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
export class Search extends Component<SearchProps> {
  state = {
    search: localStorage.getItem('data') || '',
  };

  setSearch = (data: string) => {
    this.setState({
      search: data,
    });
  };

  componentWillUnmount(): void {
    localStorage.setItem('data', this.state.search);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  render() {
    return (
      <form
        className={cn(this.props.className, styles.search)}
        {...this.props}
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <Input
          className={styles.input}
          placeholder="Search..."
          value={this.state.search}
          onChange={(e) => this.setSearch(e.target.value)}
        />
        <Button appearance="primary" className={styles.button} aria-label="Искать по сайту">
          <img alt="logo" src={GlassIcon} />
        </Button>
      </form>
    );
  }
}
