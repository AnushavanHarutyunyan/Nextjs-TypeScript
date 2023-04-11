import { HTMLAttributes, DetailedHTMLProps } from "react";
import close from "./close.svg";
import menu from "./menu.svg";
import up from "./up.svg";

export const icons = {
    close,
    menu,
    up,
};

export type IconName = keyof typeof icons;

export interface IButtonIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: "primary" | "white";
}
