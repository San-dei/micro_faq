"use client";
import Image from "next/image";
import styles from "../style/faq.module.css";
import { useState } from "react";

const Three_question = () => {
  const [show3, IsShow3] = useState<boolean>(false);

  const handleShow_3 = () => {
    IsShow3(!show3);
  };
  return (
    <>
      <div className={styles.faqItem}>
        <div className={styles.question}>
          <div className={styles.questionText}>
            ¿Cómo puedo actualizar mi información de cuenta?
          </div>

          <div className={styles.iconAddLess}>
          <span
            className={
              show3
              ? styles.icon_plus
              : `${styles.icon_plus}${styles.isActive}`
            }
            >
            <Image
              src={"/assets/icon-plus.svg"}
              alt="btn-plus"
              width={30}
              height={30}
              onClick={handleShow_3}
              className={styles.btn}
              />
          </span>
          <span
            className={
              show3
              ? `${styles.icon_minus}${styles.isActive}`
              : styles.icon_minus
            }
            >
            <Image
              src={"/assets/icon-minus.svg"}
              alt="btn-minus"
              width={30}
              height={30}
              onClick={handleShow_3}
              className={styles.btn}
              />
          </span>
              </div>
        </div>
        {show3 && (
          <div className={styles.answer}>
            Para actualizar tu información de cuenta, inicia sesión y ve a la
            sección de “Perfil” o “Configuración”. Desde allí, puedes modificar
            tu nombre, dirección, información de pago y otros datos relevantes.
            Si tienes problemas, contacta a nuestro equipo de soporte.
          </div>
        )}
      </div>
    </>
  );
};

export default Three_question;
