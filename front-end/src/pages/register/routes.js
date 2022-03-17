import store from '@/store'
export default [
    {
        path: '/register',
        name: 'RegisterPage',
        component: ()=> import(/* webpackChunkName: "Register" */'./RegisterPage'),
        beforeEnter:  (to,from,next)=>{
            if(store.getters.hasToken){
                next(false);
            }else{
                next(true);
            }
        }
    }
]