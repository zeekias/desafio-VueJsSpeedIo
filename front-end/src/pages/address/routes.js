import store from '@/store'
export default [
    {
        path: '/address/mylinks',
        name: 'MyLinksPage',
        component: ()=> import(/* webpackChunkName: "MyLinks" */'./MyLinksPage')  ,
        beforeEnter:  (to,from,next)=>{
            if(!store.getters.hasToken){
                next(false);
            }else{
                next(true);
            }
        }
    },
    {
        path: '/address/:short',
        name: 'AddressPage',
        component: ()=> import(/* webpackChunkName: "Adress" */'./AddressPage')  
    }
]