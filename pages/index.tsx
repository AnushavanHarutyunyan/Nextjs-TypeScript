import { Button, Htag, Input, P, Rating, Tag } from "@/components";
import { CardTopPage } from "@/components/CardTopPage/CardTopPage";
import { API } from "@/helpers/api";
import { firstLevelMenu } from "@/helpers/helpers";
import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import { IMenuItem } from "@/interfaces/menu";
import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";

function Home() {
    return (
        <>
            <CardTopPage firstLevelMenu={firstLevelMenu} />
        </>
    );
}

export default withLayoutHOC(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
        firstCategory,
    });
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface IHomeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}
