import { ITopLevelCategory } from "@/interfaces/page";

export interface ICardTopPageProps {
    firstLevelMenu: { route: string; name: string; icon: JSX.Element; id: ITopLevelCategory }[];
}
