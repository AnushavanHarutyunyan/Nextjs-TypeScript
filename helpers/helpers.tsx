import { ITopLevelCategory } from "@/interfaces/page";
import CourseIcon from "../layout/Menu/Icons/courses.svg";
import ProductIcon from "../layout/Menu/Icons/product.svg";
import ServicesIcon from "../layout/Menu/Icons/services.svg";
import BooksIcon from "../layout/Menu/Icons/books.svg";

export const firstLevelMenu = [
    { route: "courses", name: "Курсы", icon: <CourseIcon />, id: ITopLevelCategory.Courses },
    { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: ITopLevelCategory.Services },
    { route: "products", name: "Продукты", icon: <ProductIcon />, id: ITopLevelCategory.Products },
    { route: "books", name: "Книги", icon: <BooksIcon />, id: ITopLevelCategory.Books },
];

export const priceRu = (price: number | undefined): string => {
    if (!price) {
        return "";
    }
    return price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        .concat(" ₽");
};

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};