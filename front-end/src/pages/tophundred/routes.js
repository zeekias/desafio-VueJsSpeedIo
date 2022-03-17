export default [
    {
        path: '/top100',
        name: 'TopHundred',
        component: ()=> import(/* webpackChunkName: "TopHundred" */'./TopHundredPage')  
    }
]