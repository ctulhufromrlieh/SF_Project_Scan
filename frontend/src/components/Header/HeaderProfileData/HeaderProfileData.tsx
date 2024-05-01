import React, { useEffect } from "react";

import classes from "./HeaderProfileData.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Loader from "../../UI/Loader/Loader";

// interface HeaderProfileDataProps {
//     used: number;
//     all: number;
// }

const HeaderProfileData: React.FC = () => {
    // const isLoading = false;
    const account = useTypedSelector(state => state.account);
    const accountInfo = useTypedSelector(state => state.accountInfo);
    const {fetchAccountInfo} = useActions();
    useEffect(() => {
        fetchAccountInfo(account.accessToken);
    }, [account.isLogined]);

    // const used = 34;
    // const all = 100;

    // return (
    //     <div className={classes.main}>
    //         {accountInfo.loading 
    //             ?
    //                 <Loader/>
    //             : accountInfo.error ? accountInfo.error :
    //                 <div className={classes.content}>
    //                     <div className={classes.caption}>Использовано компаний</div>
    //                     <div className={classes.num1}>{accountInfo.usedCompanyCount}</div>
    //                     <div className={classes.caption}>Лимит по компаниям</div>
    //                     <div className={classes.num2}>{accountInfo.companyLimit}</div>
    //                 </div>
    //             }
    //     </div>
    // );
    if (accountInfo.loading) {
        return (
            <div className={classes.main}>
                <Loader/>
            </div>
        );
    }
    if (accountInfo.error) {
        return (
            <div className={classes.error}>
                <Loader/>
            </div>
        );        
    }

    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <div className={classes.caption}>Использовано компаний</div>
                <div className={classes.num1}>{accountInfo.usedCompanyCount}</div>
                <div className={classes.caption}>Лимит по компаниям</div>
                <div className={classes.num2}>{accountInfo.companyLimit}</div>
            </div>
        </div>
    );
}

export default HeaderProfileData;