import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import React from "react";
import { Htag } from "../components";

export function Error500(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Ошибка 500</Htag>
        </>
    );
}

export default withLayoutHOC(Error500);
