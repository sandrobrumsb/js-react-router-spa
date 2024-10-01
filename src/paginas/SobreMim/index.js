import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="sobre Mim">
      <h3 className={styles.subtitulo}>Ola eu sou o Sandro</h3>

      <img src={fotoSobreMim} alt="foto" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        {" "}
        Sou um profissional de TI com 6 anos de experiência, atualmente em
        testes de software e mais de 20 certificaçoes no desenvolvimento
        Front-End como principal habilidade em React.js. Ao longo da minha
        carreira, tenho me dedicado a aprimorar minhas habilidades técnicas e a
        aplicar boas práticas de desenvolvimento, garantindo a qualidade e a
        eficiência dos projetos em que atuo....
      </p>
      <br />
      <p className={styles.paragrafo}>
        {" "}
        Sou Bacharel em Sistemas de Informação, o que me permitiu aprofundar
        conhecimentos em diversas áreas da tecnologia. Essa formação acadêmica
        me ajudou a ter uma base sólida para enfrentar os desafios do mercado e
        contribuir no desenvolvimento de soluções inovadoras e eficazes
      </p>
      <br />
      <p className={styles.paragrafo}>
        Estou sempre buscando expandir minhas competências, concluí também uma
        pós-graduação em Inteligência Artificial. Com isso, tenho me
        especializado em aplicar técnicas avançadas de IA nos projetos em que
        trabalho, me posicionando como um profissional preparado para as
        demandas tecnológicas atuais e futuras.
      </p>
    </PostModelo>
  );
}
