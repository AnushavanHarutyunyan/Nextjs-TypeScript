import { ITopLevelCategory, ITopPageModel } from "@/interfaces/page";
import { IProductModel } from "@/interfaces/product";

export interface ITopPageComponentProps extends Record<string, unknown> {
    firstCategory: ITopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[];
}
 