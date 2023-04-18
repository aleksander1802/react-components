import { FormPage } from './pages/Form/FormPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Error404 } from './pages/404/404';
import About from './pages/About/About';
import MainPage from './pages/Main/MainPage';
import './styles/global.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
