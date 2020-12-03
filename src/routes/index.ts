import Painters from '@components/Pages/Painters';
import UserComponent from "@components/Pages/User/Component";

export interface IRoute {
    exact?: boolean;
    route: string;
    component: any;
    title: string;
}

export const routesTable: IRoute[] = [
    // Custom homepage
    { title: 'Painters', route: '/', component: Painters, exact: true  },
    { title: 'Painter Info', route: '/painter/:painterName', component: UserComponent, exact: true },
];