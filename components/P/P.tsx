import { IPprops } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";

export const P = ({
    size = "m",
    children,
    className,
    ...props
}: IPprops): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == "s",
                [styles.l]: size == "l",
                [styles.m]: size == "m",
            })}
            {...props}
        >
            {children}
        </p>
    );
};
