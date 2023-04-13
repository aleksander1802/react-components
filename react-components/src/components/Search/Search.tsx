import { useRef, useState } from 'react';
import cn from 'classnames';

import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { setSearch } from './searchSlice';

import { useAppSelector, useAppDispatch } from '../../hooks/dispatch.hook';

export const Search = () => {
  const search = useAppSelector((state) => state.searchValue.search);
  const [value, setValue] = useState<string>(search);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = inputRef.current!.value;
    dispatch(setSearch(input));
  };

  const setSearchValue = () => {
    inputRef.current && setValue(inputRef.current.value);
  };

  return (
    <form className={cn(styles.search)} onSubmit={(e) => handleSubmit(e)}>
      <Input
        className={styles.inputSearch}
        placeholder="Search..."
        value={value}
        onChange={setSearchValue}
        ref={inputRef}
      />
      <Button appearance="primary" className={styles.button} aria-label="Search by site">
        <img alt="logo" src={GlassIcon} />
      </Button>
    </form>
  );
};
