import { ISidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import {Search} from "../../components";

export const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sideBar)} {...props}>
            <Logo className={styles.logo} />
            <Search />
            <Menu />
        </div>
    );
};
