import styles from "./Timetable.module.css";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";

const Timetable = () => {
  let { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className={styles.timetableWrap}
      >
        <div className={styles.contactIntro}>
          <p className={styles.strongP}>
            <strong>{t("common:timetableIntro1")}</strong>
          </p>
          <p>{t("common:timetableIntro2")}</p>
        </div>
        <h3>{t("common:horarioCentro")}</h3>
        <div className={styles.scheduleWrap}>
          <div className={styles.timetableDay}>
            {t("common:dias.lunes")} & {t("common:dias.miercoles")}
          </div>
          <div className={styles.timetableHour}>16h - 21:40h</div>
          <div className={styles.timetableDay}>
            {t("common:dias.martes")} & {t("common:dias.jueves")}
          </div>
          <div className={styles.timetableHour}>9:30h - 13h | 16h - 21:40h</div>
          <div className={styles.timetableDay}>{t("common:dias.viernes")}</div>
          <div className={styles.timetableHour}>17h - 21h</div>
          <div className={styles.timetableDay}>{t("common:dias.sabado")}</div>
          <div className={styles.timetableHour}>10h - 13h</div>
        </div>
        <h3>{t("common:horarioSocios")}</h3>
        <div className={styles.scheduleWrap}>
          <div className={styles.timetableDay}>
            {`${t("common:de")} ${t("common:dias.lunes")} ${t("common:a")}
            ${t("common:dias.jueves")}`}
          </div>
          <div className={styles.timetableHour}>18:30h - 21:40h</div>
          <div className={styles.timetableDay}>{t("common:dias.viernes")}</div>
          <div className={styles.timetableHour}>17h - 21h</div>
          <div className={styles.timetableDay}>{t("common:dias.sabado")}</div>
          <div className={styles.timetableHour}>10h - 13h</div>
        </div>
      </motion.div>
    </>
  );
};

export default Timetable;
