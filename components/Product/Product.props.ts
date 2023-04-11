import { IProductModel } from "@/interfaces/product";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProductModel;
}
