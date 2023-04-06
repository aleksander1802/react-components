import { Cards } from '../../components/Cards/Cards';
import { Search } from '../../components/Search/Search';
import { useState } from 'react';

const MainPage = () => {
  const initialSearch = localStorage.getItem('search') || '';
  const [searchValue, setSearchValue] = useState(initialSearch);

  const search = (query: string) => {
    setSearchValue(query);
  };
  return (
    <>
      <Search search={search} query={searchValue} />
      <Cards query={searchValue} />
    </>
  );
};

export default MainPage;
