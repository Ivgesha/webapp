// import { createRouter, createWebHistory } from 'vue-router';
// import Footer from '../views/Footer';
// import Landing from '../views/Landing';

// const routes = [
//     {
//         path: '/',
//         name: 'Landing',
//         component: Landing

//     },
//     {
//         path: '/footer',
//         name: 'Footer',
//         component: Footer
//     },
// ];


// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });


// export default router;

import Landing from '../views/Landing'
import Footer from '../views/Footer'


export default [

    { path: '/', name: 'Landing', component: Landing },
    { path: '/footer', name: "Footer", component: Footer }



]



