import { Button, Htag, Input, P, Rating, Tag } from "@/components";
import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import { IMenuItem } from "@/interfaces/menu";
import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";

function Home() {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance="primary" arrow="down">
                Click ME
            </Button>
            <Button appearance="ghost">Click ME</Button>
            <P size="l">Text asdfasdf asdfasdf a</P>
            <P size="m">Text asdfasdf asdfasdf a</P>
            <P size="s">Text asdfasdf asdfasdf a</P>
            <Tag size="m" color="grey">
                Grey
            </Tag>
            <Tag size="s" color="green">
                Grey
            </Tag>
            <Tag color="primary" href="www.google.com">
                Primary
            </Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
            <Input placeholder="name" />
        </>
    );
}

export default withLayoutHOC(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
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
