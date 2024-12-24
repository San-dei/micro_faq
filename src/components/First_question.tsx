"use client";
import Image from "next/image";
import styles from "../style/faq.module.css";
import { useState } from "react";

const First_question = () => {
  const [show1, IsShow1] = useState<boolean>(true);

  const handleShow_1 = () => {
    IsShow1(!show1);
  };

  return (
    <>
      <div className={styles.faqItem}>
        <div className={styles.question}>
          <div className={styles.questionText}>
            ¿Cuánto tiempo tarda en procesarse mi pedido?
          </div>
          <div className={styles.iconAddLess}>
            <span className={show1 ? styles.icon_plus : `${styles.icon_plus}${styles.isActive}` }>
              <Image
                src={"/assets/icon-plus.svg"}
                alt="btn-plus"
                width={30}
                height={30}
                onClick={handleShow_1}
                className={styles.btn}
              />
            </span>
            <span className={show1 ? `${styles.icon_minus}${styles.isActive}` :styles.icon_minus}>
              <Image
                src={"/assets/icon-minus.svg"}
                alt="btn-minus"
                width={30}
                height={30}
                onClick={handleShow_1}
                className={styles.btn}
              />
            </span>
          </div>
        </div>
        {show1 && (
          <div className={styles.answer}>
            La mayoría de los pedidos se procesan en un plazo de 1 a 3 días
            hábiles. Una vez procesado, recibirás un correo electrónico con la
            confirmación del envío y un número de seguimiento para que puedas
            monitorear tu pedido.
          </div>
        )}
      </div>
    </>
  );
};

export default First_question;
