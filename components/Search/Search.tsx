import { ISearchprops } from "./Search.props";
import { Input } from "../Input/Input";
import { useState } from "react";
import { Button } from "../Button/Button";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./Search.module.css";

export const Search = ({ className, ...props }: ISearchprops): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const goToSeach = () => {
        router.push({ pathname: "/search", query: { q: search } });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            goToSeach();
        }
    };

    return (
        <form className={cn(className, styles.search)} {...props} role='search'>
            <Input
                className={styles.input}
                placeholder="Search"
                value={search}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button appearance="primary" className={styles.button} onClick={goToSeach}>
                <GlassIcon />
            </Button>
        </form>
    );
};
