import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
