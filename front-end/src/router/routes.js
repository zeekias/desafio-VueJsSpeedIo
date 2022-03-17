import { routes as home} from '../pages/home';
import { routes as login } from '../pages/login'
import  { routes as about } from '../pages/about'
import { routes as register } from '../pages/register'
import { routes as topHundred } from '../pages/tophundred'
import { routes as adress } from '../pages/address'
import {routes as erro} from '../pages/erro'
export default [
    ...home,
    ...login,
    ...about,
    ...register,
    ...topHundred,
    ...adress,
    ...erro
]