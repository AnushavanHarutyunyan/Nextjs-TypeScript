import { IReviewModel } from "@/interfaces/product";
import { DetailedHTMLProps, HTMLAttributes,  } from "react";

export interface IReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
}
