export default [
    {
        path: '/:pathMatch(.*)*',
        name: 'Erro404',
        component: ()=> import(/* webpackChunkName: "Adress" */'./ErroPage')
    }
]