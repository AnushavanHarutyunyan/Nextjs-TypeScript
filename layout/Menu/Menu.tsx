import { AppContext } from "@/context/app.context";
import { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { FirstLevelMenuItem, IPageItem } from "@/interfaces/menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        hidden: {
            marginBottom: 0,
        },
    };

    const variantsChild = {
        visible: {
            opacity: 1,
            height: 29,
        },
        hidden: {
            opacity: 0,
            height: 0,
            marginBottom: 0,
        },
    };

    const openSencondLevel = (secondCategory: string) => {
        setMenu &&
            setMenu(
                menu.map((m) => {
                    if (m._id.secondCategory == secondCategory) {
                        m.isOpened = !m.isOpened;
                    }
                    return m;
                })
            );
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((menu) => (
                    <div key={menu.route}>
                        <Link href={`/${menu.route}`}>
                            <div
                                className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: menu.id == firstCategory,
                                })}
                            >
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </Link>
                        {menu.id == firstCategory && buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu &&
                    menu.map((m) => {
                        if (m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])) {
                            m.isOpened = true;
                        }

                        return (
                            <div key={m._id.secondCategory}>
                                <div
                                    className={styles.secondLevel}
                                    onClick={() => openSencondLevel(m._id.secondCategory)}
                                >
                                    {m._id.secondCategory}
                                </div>
                                <motion.div
                                    layout
                                    variants={variants}
                                    initial={m.isOpened ? "visible" : "hidden"}
                                    animate={m.isOpened ? "visible" : "hidden"}
                                    className={cn(styles.secondLevelBlock)}
                                >
                                    {buildThirdLevel(m.pages, menuItem.route)}
                                </motion.div>
                            </div>
                        );
                    })}
            </div>
        );
    };

    const buildThirdLevel = (pages: IPageItem[], route: string) => {
        return pages.map((p) => (
            <motion.div key={p._id} variants={variantsChild}>
                <Link
                    href={`/${route}/${p.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
                    })}
                >
                    {p.category}
                </Link>
            </motion.div>
        ));
    };

    return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
};
