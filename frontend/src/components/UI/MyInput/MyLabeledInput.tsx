import React, { ComponentPropsWithoutRef, useEffect, useId, useRef } from "react";

import classes from './MyLabeledInput.module.scss';

interface MyLabeledInputProps extends ComponentPropsWithoutRef<"input">{
    labelCaption?: string;
    errorCaption?: string;
    setValue?: (value: string) => void;
}

const MyLabeledInput: React.FC<MyLabeledInputProps> = ({labelCaption, errorCaption, setValue, ...rest}: MyLabeledInputProps) => {
    const idRef = useRef<string>();

    let isError = true;

    const inputClassNames = [
        classes.input_normal,
        classes.input_error,
    ];

    const errorMsgClassNames = [
        classes.error_msg_hidden,
        classes.error_msg_visible,
    ];

    useEffect(() => {       
        const id = "labeledEdit" + useId();
        idRef.current = id;
        return () => {
            idRef.current = undefined;
        };
    }, []);

    return (
        <div>
            <label htmlFor={idRef.current}>{labelCaption}</label>
            <input id={idRef.current} type="text" className={inputClassNames[Number(isError)]} {...rest}></input>
            <p className={errorMsgClassNames[Number(isError)]}>{errorCaption}</p>
        </div>
    );
}

export default MyLabeledInput;