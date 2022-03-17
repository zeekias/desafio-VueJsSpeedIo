export default [
    {
        path: '/',
        name: 'HomePage',
        component: ()=> import(/* webpackChunkName: "Home" */'./HomePage')  
    },
    {
        path: '/:short',
        name: 'RedirectPage',
        component: ()=> import(/* webpackChunkName: "Redirect" */'./RedirectPage')  
    },
]