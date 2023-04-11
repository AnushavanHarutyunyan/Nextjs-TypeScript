import { AppContextProvider, IAppContext } from "@/context/app.context";
import { Layout } from "@/layout/Layout";
import { FunctionComponent } from "react";

export const withLayoutHOC = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};
