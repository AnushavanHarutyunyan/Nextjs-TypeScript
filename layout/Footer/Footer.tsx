import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
    return (
        <div className={cn(styles.footer, className)} {...props}>
            <p>OwlTop © 2020 - 2021 Все права защищены</p>
            <a href="#" target="_blank">
                Пользовательское соглашение
            </a>
            <a href="#" target="_blank">
                Политика конфиденциальности
            </a>
        </div>
    );
};
