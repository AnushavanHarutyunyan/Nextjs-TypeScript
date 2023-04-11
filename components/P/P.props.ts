import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPprops
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    size?: "s" | "l" | "m";
    children: ReactNode;
}
