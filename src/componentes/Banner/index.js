import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>

        <p className={styles.paragrafo}>
          Olá, meu nome é Sandro, sou desenvolvedor front-end com paixão por
          criar interfaces intuitivas e funcionais que transformam ideias em
          experiências digitais impactantes."
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="circuloColorido"
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="foto de perfil"
        />
      </div>
    </div>
  );
}
