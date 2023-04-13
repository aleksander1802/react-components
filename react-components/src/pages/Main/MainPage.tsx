import { Cards } from '../../components/Cards/Cards';
import { Search } from '../../components/Search/Search';
import { useState } from 'react';

const MainPage = () => {
  const initialSearch = '';
  const [searchValue, setSearchValue] = useState(initialSearch);

  const search = (query: string) => {
    setSearchValue(query);
  };
  return (
    <>
      <Search />
      <Cards />
    </>
  );
};

export default MainPage;
