import { ILayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from "./Layout.module.css";

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.body}>{children}</main>
            <Footer className={styles.footer} />
        </div>
    );
};
