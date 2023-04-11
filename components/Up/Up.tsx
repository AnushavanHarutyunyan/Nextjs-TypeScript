import { motion, useAnimation } from "framer-motion";
import styles from "./Up.module.css";
import { useScroll } from "@/hooks/useScroll";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScroll();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div className={styles.up} initial={{ opacity: 0 }} animate={controls}>
            <ButtonIcon onClick={scrollToTop} icon="up" appearance="primary" />
        </motion.div>
    );
};