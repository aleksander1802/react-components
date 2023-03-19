import styles from './404.module.css';

export function Error404(): JSX.Element {
  return (
    <>
      <div className={styles.error}>Error 404</div>
    </>
  );
}
