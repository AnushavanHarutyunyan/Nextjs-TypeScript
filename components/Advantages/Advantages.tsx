import { HhAdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: HhAdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map((a) => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline} />
                    <div className={styles.description}>{a.description}</div>
                </div>
            ))}
        </>
    );
};
