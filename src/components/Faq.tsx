import Image from "next/image";
import styles from "../style/faq.module.css";
import First_question from "./First_question";
import Second_question from "./Second_question";
import Three_question from "./Three_question";
import Four_question from "./Four_question";

const Faq = () => {
  return (
    <>
      <div className={styles.faqContainer_img}></div>
      <div className={styles.faqContainer_bk}></div>
      
      <div className={styles.all}>
        <div className={styles.faq_Container}>
          <div className={styles.faq_subContainer}>
            <span>
              <Image
                src={"/assets/icon-star.svg"}
                alt="star"
                width={25}
                height={25}
              />
            </span>
            <span className={styles.faq}>FAQs</span>
          </div>
          <div className={styles.faq_allSection}>
            <First_question />
            <Second_question />
            <Three_question />
            <Four_question />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
