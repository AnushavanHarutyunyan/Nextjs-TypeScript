import { Htag } from "../Htag/Htag";
import styles from "./CardTopPage.module.css";
import { ICardTopPageProps } from "./CardTopPage.props";

export const CardTopPage = ({ firstLevelMenu }: ICardTopPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            {firstLevelMenu.map(({ icon, name ,id}) => {
                return (
                    <div className={styles.element} key={id}>
                        <Htag tag="h2" children={name} />
                        {icon}
                    </div>
                );
            })}
        </div>
    );
};
