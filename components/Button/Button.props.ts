import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
    > {
    appearance: "primary" | "ghost";
    children: ReactNode | string;
    arrow?: "right" | "down" | "none";
}
