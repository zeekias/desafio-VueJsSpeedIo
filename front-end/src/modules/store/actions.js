import axios from 'axios';
import * as types from './mutation-types';
export const ActionTest = ()=>{
    console.log('alo');
};
export const ActionSetUser = ({commit}, payload) =>{
    commit(types.SET_USER, payload)
};
export const ActionSetToken = ({commit}, payload) =>{
    commit(types.SET_TOKEN, payload)
};
export const ActionToLogin = async({ dispatch }, payload) => {
      const response = await axios.post('http://localhost:3072/users/login', payload);
      dispatch('ActionSetUser', {username: response.data.username, id:response.data.id} );
      dispatch('ActionSetToken', response.data.token);
      
      const user = {
          username: response.data.username,
          id:response.data.id
      };
      localStorage.setItem('state', JSON.stringify({user, token:response.data.token}));
};
export const ActionToLogout = (async({dispatch}) =>{
    localStorage.removeItem('state');
    dispatch('ActionSetUser', '');
    dispatch('ActionSetToken', '');
});

export const ActionToRegister = ( async (context, payload) =>{
    console.log(context);
    await axios.post('http://localhost:3072/users', payload);
});
export const ActionGetData = ( async (_, payload) =>{
    const response = await axios(`http://localhost:3072/address/${payload}`);
    return response.data;
});
export const ActionLoadState = ({dispatch},payload) =>{
    dispatch('ActionSetUser', payload.user);
    dispatch('ActionSetToken', payload.token);
};
export const ActionGetMyLinks = async (_,payload)=>{
    const response = await axios('http://localhost:3072/address', {
        headers:{
            Authorization:'Bearer ' + payload
        }
    });
    return response.data;
};
export const ActionDeleteLink = async(_,payload)=>{
    await axios.delete(`http://localhost:3072/address/${payload.id}`,{
        headers:{
            Authorization:'Bearer ' + payload.token
        }
    });
}

