import { SortEnum } from "../../components/Sort/Sort.props";
import { IProductModel } from "../../interfaces/product";

export interface ISortReducerState {
    sort: SortEnum;
    products: IProductModel[];
}

type SortAction = { type: SortEnum } | { type: SortEnum.Rating } | { type: "reset"; initialState: IProductModel[] };

export const sortReducer = (state: ISortReducerState, action: SortAction) => {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? 1 : -1)),
            };
        case "reset":
            return {
                sort: SortEnum.Rating,
                products: action.initialState,
            };
        default:
            throw new Error("Неверни тип сортировки");
    }
};
