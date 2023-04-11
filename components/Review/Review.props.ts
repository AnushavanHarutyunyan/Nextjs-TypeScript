import { IReviewModel } from "@/interfaces/product";
import { DetailedHTMLProps, HTMLAttributes,  } from "react";

export interface IReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: IReviewModel
}
