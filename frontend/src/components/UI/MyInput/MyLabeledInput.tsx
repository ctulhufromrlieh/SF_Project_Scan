import React, { ComponentPropsWithoutRef, useEffect, useId, useRef } from "react";

import classes from './MyLabeledInput.module.scss';

interface MyLabeledInputProps extends ComponentPropsWithoutRef<"input">{
    id: string;
    labelCaption?: string;
    errorCaption?: string;
    // value?: string;
    setValue?: (value: string) => void;
    isError?: boolean;
    setIsError?: (value: boolean) => void;
    addContainerClassNames?: string[];
    addLabelClassNames?: string[];
    addInputClassNames?: string[];
    addErrorMsgClassNames?: string[];
}

const MyLabeledInput: React.FC<MyLabeledInputProps> = ({id, type="text", labelCaption = "", errorCaption = "", value = "", setValue = undefined, isError = false,
    setIsError = undefined, addContainerClassNames = [], addLabelClassNames = [], addInputClassNames = [], addErrorMsgClassNames = [], ...rest}: MyLabeledInputProps) => {
    
    // const idRef = useRef<string>();
    // let isError = true;

    const inputClassNames = [
        classes.input_normal,
        classes.input_error,
    ];

    const errorMsgClassNames = [
        classes.error_msg_hidden,
        classes.error_msg_visible,
    ];

    // useEffect(() => {       
    //     const id = "labeledEdit" + useId();
    //     idRef.current = id;
    //     return () => {
    //         idRef.current = undefined;
    //     };
    // }, []);

    const makeClassName = (baseClass: string, addClasses: string[]): string => {
        let resClasses = [baseClass];
        if (addClasses) {
            resClasses.push(...addClasses);
        }

        return resClasses.join(" ");
    }

    // return (
    //     <div className={classes.container}>
    //         <label htmlFor={idRef.current} className={classes.label}>{labelCaption}</label>
    //         <input id={idRef.current} type="text" className={inputClassNames[Number(isError)]} {...rest}></input>
    //         <div className={classes.error_msg_container}>
    //             <p className={errorMsgClassNames[Number(isError)]}>{errorCaption}</p>
    //         </div>
    //     </div>
    // );

    // return (
    //     <div className={makeClassName(classes.container, addContainerClassNames)}>
    //         <label htmlFor={idRef.current} className={makeClassName(classes.label, addLabelClassNames)}>{labelCaption}</label>
    //         <input id={idRef.current} type="text" className={makeClassName(inputClassNames[Number(isError)], addInputClassNames)} {...rest}></input>
    //         <div className={classes.error_msg_container}>
    //             <p className={makeClassName(errorMsgClassNames[Number(isError)], addErrorMsgClassNames)}>{errorCaption}</p>
    //         </div>
    //     </div>
    // );

    const handleInputChange = (value: string) => {
        if (setValue) {
            setValue(value);
        }
        if (setIsError) {
            setIsError(false);
        }
    }

    return (
        <div className={makeClassName(classes.container, addContainerClassNames)}>
            <label htmlFor={id} className={makeClassName(classes.label, addLabelClassNames)}>{labelCaption}</label>
            <input 
                id={id} 
                type={type} 
                className={makeClassName(inputClassNames[Number(isError)], addInputClassNames)} 
                onChange={(event) => handleInputChange(event.target.value)}
                {...rest}
            />
            <div className={classes.error_msg_container}>
                <p className={makeClassName(errorMsgClassNames[Number(isError)], addErrorMsgClassNames)}>{errorCaption}</p>
            </div>
        </div>
    );
}

export default MyLabeledInput;