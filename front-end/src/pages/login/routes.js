import store from '@/store'
export default [
    {
        path: '/login',
        name: 'LoginPage',
        component: ()=> import(/* webpackChunkName: "Login" */ './LoginPage'),
        beforeEnter:  (to,from,next)=>{
            if(store.getters.hasToken){
                next(false);
            }else{
                next(true);
            }
        }
    }
]