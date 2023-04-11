import { API } from "@/helpers/api";
import { firstLevelMenu } from "@/helpers/helpers";
import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import { IMenuItem } from "@/interfaces/menu";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

function Type({ menu, firstCategory }: ITypeProps) {
    return <>{firstCategory}</>;
}

export default withLayoutHOC(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map((m) => `/${m.route}`),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const firstCategoryItems = firstLevelMenu.find((m) => m.route == params.type);

    if (!firstCategoryItems) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItems.id,
    });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItems.id,
        },
    };
};

interface ITypeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}
