import { loadUsersByPage } from '../use_cases/loadUsersByPage.js';

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async() => {

    loadUsersByPage( state.currentPage +1);
}

const loadPreviusPage =()=>{
  throw new Error('Not implemented');
}

const onUserChange =()=>{
    throw new Error('Not implemented');
} 

const reloadPage =()=>{
    throw new Error('Not implemented');
}


export default {

    loadNextPage,
    reloadPage,
    onUserChange,
    loadPreviusPage,

    getUser: ()=> [...state.users],
    getCurrentPage: ()=> state.currentPage
}