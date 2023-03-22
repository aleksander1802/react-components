import { Component } from 'react';
import { Cards } from '../../components/Cards/Cards';
import { Search } from '../../components/Search/Search';

class MainPage extends Component {
  render() {
    return (
      <>
        <Search />
        <Cards />
      </>
    );
  }
}

export default MainPage;
