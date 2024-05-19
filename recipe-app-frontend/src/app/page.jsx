import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <h2>Välkommen!</h2>
      <div className={styles.description}>
        <div>
          <p>
            En mobilapplikation som ger dig konkreta receptförslag utifrån de
            matvaror du har hemma! Fyll enkelt i vilka varor du har i skafferiet
            och ta del av mängder med recept anpassade just efter dina behov.
          </p>
          <p>
            Bristen på inspiration när man öppnar kylskåpet leder lätt till
            många ogenomtänkta besök i mataffären eller den lokala
            snabbmatsrestaurangen i stället för att laga middag på de varor man
            faktiskt har hemma. De varorna blir dåliga och måste slängas, vilket
            är dåligt både för miljön och för plånboken.
          </p>
          <p>
            Finn ny inspiration genom att ta del av andra användares bästa
            recept och dela med dig av dina favoritrecept för att bidra till att
            göra vardagen lättare för andra! Det här är appen för dig som vill
            spara både tid, pengar och tålamod!
          </p>
        </div>

        <Image
          src="/diet.png"
          alt="Food image"
          width={250}
          height={250}
          priority
        />
      </div>
    </>
  );
}
