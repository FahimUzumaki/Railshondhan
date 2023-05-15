import { createGlobalState } from "react-hooks-global-state";
const userState = {
    isLoggedIn: false,
    user:{
        // isLoggedIn: false,
        accessToken: "",
        refereshToken: "",
        id: null,
        name: "",
        email: null
    }
 };
 
const { useGlobalState } = createGlobalState(userState);
export { useGlobalState };