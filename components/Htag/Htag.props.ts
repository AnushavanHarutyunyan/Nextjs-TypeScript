import { ReactNode } from "react";

export interface IHtagprops {
    tag: "h1" | "h2" | "h3";
    children: ReactNode;
}
