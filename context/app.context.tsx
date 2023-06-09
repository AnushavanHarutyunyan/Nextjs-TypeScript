import { IMenuItem } from "@/interfaces/menu";
import { ITopLevelCategory } from "@/interfaces/page";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export interface IAppContext {
    menu: IMenuItem[];
    firstCategory: ITopLevelCategory;
    setMenu?: (newMenu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: ITopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
    const [menuState, setMenuState] = useState<IMenuItem[]>(menu);

    const setMenu = (newMenu: IMenuItem[]) => {
        setMenuState(newMenu);
    };

    useEffect(() => {
        setMenuState(menu);
    }, [menu]);
    
    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>;
};
