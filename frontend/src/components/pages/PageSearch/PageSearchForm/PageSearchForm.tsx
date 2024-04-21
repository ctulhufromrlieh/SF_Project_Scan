import React, { useState } from "react";
import classes from "./PageSearchForm.module.scss";
import MyLabeledInput from "../../../UI/MyInput/MyLabeledInput";

const PageSearchForm = () => {
    const [inn, setInn] = useState("");
    const [isInnError, setIsInnError] = useState(false);


    const innChangeHandler = (value: string) => {
        setInn(value);
        // setIsSubmitEnabled(isPrimaryCorrectData(value, password));
    }

    return (
        <div className={classes.search_form}>
            <div className={classes.left_part}>
            <MyLabeledInput 
                            id="search-form__inn"
                            type="text"
                            labelCaption="ИНН компании*" 
                            errorCaption="Введите корректные данные" 
                            value={inn}
                            setValue={(value) => innChangeHandler(value)} 
                            isError={isInnError}
                            setIsError={(value) => setIsInnError(value)}
                            addContainerClassNames={[classes.inn_input]}
                        />
            </div>
            <div className={classes.right_part}>
                
            </div>
        </div>
    );
}

export default PageSearchForm;