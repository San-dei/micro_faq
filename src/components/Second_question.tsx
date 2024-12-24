"use client";
import Image from "next/image";
import styles from "../style/faq.module.css";
import { useState } from "react";

const Second_question = () => {
  const [show2, IsShow2] = useState<boolean>(false);

  const handleShow_2 = () => {
    IsShow2(!show2);
  };
  return (
    <>
      <div className={styles.faqItem}>
        <div className={styles.question}>
          <div className={styles.questionText}>
            ¿Puedo devolver un producto si no estoy satisfecho?
          </div>
          <div className={styles.iconAddLess}>
            <span
              className={
                show2
                  ? styles.icon_plus
                  : `${styles.icon_plus}${styles.isActive}`
              }
            >
              <Image
                src={"/assets/icon-plus.svg"}
                alt="btn-plus"
                width={30}
                height={30}
                onClick={handleShow_2}
                className={styles.btn}
              />
            </span>
            <span
              className={
                show2
                  ? `${styles.icon_minus}${styles.isActive}`
                  : styles.icon_minus
              }
            >
              <Image
                src={"/assets/icon-minus.svg"}
                alt="btn-minus"
                width={30}
                height={30}
                onClick={handleShow_2}
                className={styles.btn}
              />
            </span>
          </div>
        </div>
        {show2 && (
          <div className={styles.answer}>
            Sí, ofrecemos una política de devolución para todos nuestros
            productos. Tienes hasta 30 días a partir de la fecha de recepción
            para devolver un artículo, siempre que esté en su empaque original y
            sin haber sido usado. Consulta nuestra política de devoluciones para
            más detalles.
          </div>
        )}
      </div>
    </>
  );
};

export default Second_question;
