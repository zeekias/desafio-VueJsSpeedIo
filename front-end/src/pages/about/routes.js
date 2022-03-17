export default [
    {
        path: '/about',
        name: 'AboutPage',
        component: ()=> import(/* webpackChunkName: "About" */'./AboutPage')  
    }
]