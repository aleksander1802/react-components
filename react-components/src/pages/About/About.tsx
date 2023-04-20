import { Htag } from '../../components/Htag/Htag';
import SkyrimIcon from './skyrim.svg';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.first}>
          <Htag tag="h1">We know all about lorem</Htag>
          <img src={SkyrimIcon} alt="we know" />
        </div>
        <div className={styles.second}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae natus, saepe error dolore
          maiores molestiae a eaque ad rerum beatae voluptatem hic, harum laudantium, quod tempora
          sapiente nihil sequi. Exercitationem laudantium libero corporis temporibus natus corrupti
          animi neque nulla optio, fugit harum nobis culpa amet illum hic, at adipisci eligendi
          laborum nisi. Dolores commodi minima exercitationem ipsam est, omnis similique. Atque ab
          doloremque voluptatibus provident nemo, iusto ullam, aperiam laborum veritatis assumenda
          repellendus beatae id, possimus neque? Exercitationem ratione, voluptatibus iste id iure
          eligendi quidem assumenda quia distinctio cum nulla ut vero atque praesentium veritatis
          reiciendis! Tempora minus dolores placeat!
        </div>
      </div>
    </>
  );
};

export default About;
