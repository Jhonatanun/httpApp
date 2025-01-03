
import userStore from "./store/user_store"


/**
 * 
 * @param {HTMLElement} element 
 */
export const UserApp = async( element )=>{
    
    element.innerHTML = 'Loading...'

    await userStore.loadNextPage();
}