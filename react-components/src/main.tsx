import './styles/global.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.hydrateRoot(
  root,
  <Provider store={store}>
    <App />
  </Provider>
);
