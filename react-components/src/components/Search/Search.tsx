import { MutableRefObject, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useRef } from 'react';

export const Search = () => {
  const initialSearch = localStorage.getItem('search') || '';
  const [searchValue, setSearchValue] = useState(initialSearch);
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const currentRefValue = searchRef.current;

    return () => {
      localStorage.setItem('search', currentRefValue.value);
    };
  }, []);

  const setSearch = (data: string) => {
    setSearchValue(data);
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
        ref={searchRef}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button appearance="primary" className={styles.button} aria-label="Search by site">
        <img alt="logo" src={GlassIcon} />
      </Button>
    </form>
  );
};
