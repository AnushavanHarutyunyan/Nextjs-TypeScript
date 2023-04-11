import { API } from "@/helpers/api";
import { firstLevelMenu } from "@/helpers/helpers";
import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import { IMenuItem } from "@/interfaces/menu";
import { ITopLevelCategory, ITopPageModel } from "@/interfaces/page";
import { IProductModel } from "@/interfaces/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { TopPageComponent } from "../../page-components/index";

function TopPage({ menu, page, products, firstCategory }: ITopPageProps) {
    return (
        <>
            <Head>
                <title>{page.metaTitle}</title>
                <meta name="descripton" content={page.metaDescription} />
                <meta property="og:title" content={page.metaTitle} />
                <meta property="og:description" content={page.metaDescription} />
                <meta property="og:type" content='article' />
            </Head>
            <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
        </>
    );
}

export default withLayoutHOC(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
            firstCategory: m.id,
        });
        paths = paths.concat(menu.flatMap((s) => s.pages.map((s) => `/${m.route}/${s.alias}`)));
    }

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
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
    try {
        const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
            firstCategory: firstCategoryItems.id,
        });

        if (menu.length == 0) {
            return {
                notFound: true,
            };
        }

        const { data: page } = await axios.get<ITopPageModel>(API.topPage.byAlias + params.alias);

        const { data: products } = await axios.post<IProductModel[]>(API.product.find, {
            category: page.category,
            limit: 10,
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItems.id,
                page,
                products,
            },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

interface ITopPageProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: ITopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[];
}
