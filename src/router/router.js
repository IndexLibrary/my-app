import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const router = [{
        path: '/',
        exact: true,
        component: Home,
        routes: []
    },
    {
        path: '/about',
        component: About
    }
]

export default router