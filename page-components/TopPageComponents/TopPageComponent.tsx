import React, { useEffect, useReducer } from "react";
import { ITopPageComponentProps } from "./TopPageComponents.props";
import styles from "./TopPageComponent.module.css";
import { Advantages, HhData, Htag, P, Sort, Tag } from "@/components";
import { ITopLevelCategory } from "@/interfaces/page";
import { SortEnum } from "@/components/Sort/Sort.props";
import { sortReducer } from "@/page-components/TopPageComponents/sort.reducer";
import { Product } from "@/components/Product/Product";
import { Up } from "@/components/Up/Up";

export const TopPageComponent = ({ firstCategory, page, products }: ITopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducsts, sort }, dispatchSort] = useReducer(sortReducer, {
        products,
        sort: SortEnum.Rating,
    });

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {
        dispatchSort({ type: "reset", initialState: products });
    }, [products]);

    return (
        page && (
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Htag tag="h1">{page.title}</Htag>
                    {products && (
                        <Tag color="grey" size="m">
                            {products.length}
                        </Tag>
                    )}
                    <Sort sort={sort} setSort={setSort} />
                </div>
                <div>{sortedProducsts && sortedProducsts.map((p) => <Product layout key={p._id} product={p} />)}</div>
                <div className={styles.hhTitle}>
                    <Htag tag="h2">Вакансии - {page.category}</Htag>
                    <Tag color="red" size="m">
                        hh.ru
                    </Tag>
                </div>
                {firstCategory == ITopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
                {page.advantages && page.advantages.length > 0 && (
                    <>
                        <Htag tag="h2">Примушество</Htag>
                        <Advantages advantages={page.advantages} />
                    </>
                )}
                {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }}></div>}
                <Htag tag="h2">Получаемые навыки</Htag>
                {page.tags.map((t) => (
                    <Tag key={t} color="primary">
                        {t}
                    </Tag>
                ))}
                <Up/>
            </div>
        )
    );
};
