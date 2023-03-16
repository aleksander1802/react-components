import { Component } from 'react';
import { Cards } from '../components/Cards/Cards';
import { Htag } from '../components/Htag/Htag';
import { Search } from '../components/Search/Search';

class MainPage extends Component {
  render() {
    return (
      <>
        {/* <Htag tag="h1">Main</Htag> */}
        <Search />
        <Cards />
      </>
    );
  }
}

export default MainPage;
