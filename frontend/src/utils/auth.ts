import { useActions } from "../hooks/useActions";

const loginUrl = "\login";

export const isValidAuth = (): boolean => {
    const accessToken = localStorage.getItem("account_accessToken");
    const expire = localStorage.getItem("account_expire");

    const delta = 1000 * 60 * 5;

    if (accessToken && expire) {
        const expireDate = new Date(expire);
        if (Date.now() >= expireDate.getTime() - delta) {
            return false;    
        }
    } else {
        return false;
    }

    return true;
}

export const checkAuth = () => {
    if (!isValidAuth()) {
        return window.location.replace(loginUrl);
    }
}

// const { loginUserReset } = useActions();

// export const logout = () => {
//     loginUserReset();
// };

// export const checkAuth = () => {
//     const accessToken = localStorage.getItem("account_accessToken");
//     const expire = localStorage.getItem("account_expire");

//     const delta = 1000 * 60 * 5;

//     if (accessToken && expire) {
//         const expireDate = new Date(expire);
//         if (Date.now() >= expireDate.getTime()) {
//             return window.location.replace(loginUrl);    
//         }
//     } else {
//         return window.location.replace(loginUrl);
//     }
// }