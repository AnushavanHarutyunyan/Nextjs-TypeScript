import { withLayoutHOC } from "@/HOC/withLayoutHOC";
import React from "react";
import { Htag } from "../components";

export function Error404(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Ошибка 404</Htag>
        </>
    );
}

export default withLayoutHOC(Error404);
