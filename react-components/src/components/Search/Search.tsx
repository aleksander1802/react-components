import { useState } from 'react';
import cn from 'classnames';

import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Search = () => {
  const initialSearchValue = localStorage.getItem('data') || '';

  const [searchValue, setSearchValue] = useState(initialSearchValue);

  const setSearch = (data: string) => {
    setSearchValue(data);
    localStorage.setItem('data', data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={cn(styles.search)} onSubmit={(e) => handleSubmit(e)}>
      <Input
        className={styles.inputSearch}
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button appearance="primary" className={styles.button} aria-label="Search by site">
        <img alt="logo" src={GlassIcon} />
      </Button>
    </form>
  );
};
