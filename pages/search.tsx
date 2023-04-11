import { API } from "@/helpers/api";
import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import { IMenuItem } from "@/interfaces/menu";
import axios from "axios";
import { GetStaticProps } from "next";

function Search({ menu, firstCategory }: IHomeProps) {
    return <>Search</>;
}

export default withLayoutHOC(Search);

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
