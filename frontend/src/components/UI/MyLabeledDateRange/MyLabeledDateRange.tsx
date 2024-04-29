import React, { ComponentPropsWithoutRef, useEffect, useId, useRef } from "react";

import classes from './MyLabeledDateRange.module.scss';
import { makeClassName } from "../../../utils/classes";

export interface DateRange {
    value1: string;
    value2: string;
};

interface MyLabeledDateRangeProps extends ComponentPropsWithoutRef<"input">{
    labelCaption?: string;
    isLabelMarked?: boolean;
    errorCaption?: string;
    range: DateRange | undefined;
    setRange?: (value: DateRange) => void;
    isError?: boolean;
    setIsError?: (value: boolean) => void;
    addContainerClassNames?: string[];
    addLabelClassNames?: string[];
    addInputClassNames?: string[];
    addErrorMsgClassNames?: string[];
}

const MyLabeledDateRange: React.FC<MyLabeledDateRangeProps> = ({type="date", labelCaption = "", isLabelMarked = false, 
    errorCaption = "", range = undefined, setRange = undefined, isError = false, setIsError = undefined, 
    addContainerClassNames = [], addLabelClassNames = [], addInputClassNames = [], addErrorMsgClassNames = [], ...rest}: MyLabeledDateRangeProps) => {

    const labelMarkClassNames = [
        classes.label_mark_normal,
        classes.label_mark_error,
    ];

    const inputClassNames = [
        classes.input_normal,
        classes.input_error,
    ];

    const errorMsgClassNames = [
        classes.error_msg_hidden,
        classes.error_msg_visible,
    ];

    const handleInputChange = (value: string, isFirst: boolean) => {
        if (setRange && range) {
            if (isFirst) {
                setRange({value1: value, value2: range.value2});
            } else {
                setRange({value1: range.value1, value2: value});
            }

            if (setIsError) {
                setIsError(false);
            }
        }
    }

    let [value1, value2] = ["", ""];
    if (range) {
        value1 = range.value1;
        value2 = range.value2;
    }

    return (
        <div className={makeClassName(classes.container, addContainerClassNames)}>
            <div className={classes.label_container}>
                {/* <label htmlFor={id} className={makeClassName(classes.label, addLabelClassNames)}> */}
                <p className={makeClassName(classes.label_normal, addLabelClassNames)}>
                    {labelCaption}
                </p>
                {isLabelMarked 
                    ?
                    <p className={labelMarkClassNames[Number(isError)]}>*</p>
                    :
                    null
                }
            </div>
            <div className={classes.range_container}>
                <input 
                    type={type} 
                    className={makeClassName(inputClassNames[Number(isError)], addInputClassNames)} 
                    onChange={(event) => handleInputChange(event.target.value, true)}
                    value={value1}
                    {...rest}
                />
                <input 
                    type={type} 
                    className={makeClassName(inputClassNames[Number(isError)], addInputClassNames)} 
                    onChange={(event) => handleInputChange(event.target.value, false)}
                    value={value2}
                    {...rest}
                />
            </div>
            <div className={classes.error_msg_container}>
                <p className={makeClassName(errorMsgClassNames[Number(isError)], addErrorMsgClassNames)}>{errorCaption}</p>
            </div>
        </div>
    );
}

export default MyLabeledDateRange;