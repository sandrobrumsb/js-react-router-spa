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
        Profissional de TI com 6 anos de experiência na área, destacando-se
        especialmente em testes de software e no desenvolvimento com React.js.
        Ao longo de sua carreira, ele tem se dedicado a aprimorar suas
        habilidades técnicas e a aplicar boas práticas de desenvolvimento para
        garantir a qualidade e a eficiência dos projetos em que atua...
      </p>
      <br />
      <p className={styles.paragrafo}>
        {" "}
        bacharelado em Sistemas de Informação, onde tem aprofundado seus
        conhecimentos em diversas áreas da tecnologia. Sua formação acadêmica
        lhe proporciona uma base sólida para enfrentar os desafios do mercado,
        além de contribuir para o desenvolvimento de soluções inovadoras e
        eficazes.
      </p>
      <br />
      <p className={styles.paragrafo}>
        Buscando sempre expandir suas competências, Sandro também concluiu uma
        pós-graduação em Inteligência Artificial. Com isso, ele tem se
        especializado em aplicar técnicas avançadas de IA em seus projetos, o
        que o posiciona como um profissional preparado para as demandas
        tecnológicas atuais e futuras.
      </p>
    </PostModelo>
  );
}
