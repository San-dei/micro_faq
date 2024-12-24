"use client";
import Image from "next/image";
import styles from "../style/faq.module.css";
import { useState } from "react";

const Four_question = () => {
  const [show4, IsShow4] = useState<boolean>(false);

  const handleShow_4 = () => {
    IsShow4(!show4);
  };
  return (
    <>
      <div className={styles.faqItem}>
        <div className={styles.question}>
          <div className={styles.questionText}>
            ¿Ofrecen algún tipo de garantía en sus productos?
          </div>
          <div className={styles.iconAddLess}>
            <span
              className={
                show4
                  ? styles.icon_plus
                  : `${styles.icon_plus}${styles.isActive}`
              }
            >
              <Image
                src={"/assets/icon-plus.svg"}
                alt="btn-plus"
                width={30}
                height={30}
                onClick={handleShow_4}
                className={styles.btn}
              />
            </span>
            <span
              className={
                show4
                  ? `${styles.icon_minus}${styles.isActive}`
                  : styles.icon_minus
              }
            >
              <Image
                src={"/assets/icon-minus.svg"}
                alt="btn-minus"
                width={30}
                height={30}
                onClick={handleShow_4}
                className={styles.btn}
              />
            </span>
          </div>
        </div>
        {show4 && (
          <div className={styles.answer}>
            Sí, todos nuestros productos cuentan con una garantía estándar de un
            año. Esto cubre defectos de fabricación y problemas relacionados con
            la calidad. Si experimentas algún problema, por favor, ponte en
            contacto con nosotros para iniciar un proceso de garantía.
          </div>
        )}
      </div>
    </>
  );
};

export default Four_question;
