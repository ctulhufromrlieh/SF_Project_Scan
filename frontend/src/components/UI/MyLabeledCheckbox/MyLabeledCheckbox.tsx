import React, { ComponentPropsWithoutRef, useEffect, useId, useRef } from "react";

import classes from './MyLabeledCheckbox.module.scss';

interface MyLabeledCheckboxProps extends ComponentPropsWithoutRef<"input">{
    // id: string;
    labelCaption?: string;
    checked?: boolean;
    setChecked?: (checked: boolean) => void;
    addContainerClassNames?: string[];
    addLabelClassNames?: string[];
    addInputClassNames?: string[];
}

const MyLabeledCheckbox: React.FC<MyLabeledCheckboxProps> = ({type="checkbox", labelCaption = "", checked = false, setChecked = undefined, 
    addContainerClassNames = [], addLabelClassNames = [], addInputClassNames = [],  ...rest}: MyLabeledCheckboxProps) => {

    const makeClassName = (baseClass: string, addClasses: string[]): string => {
        let resClasses = [baseClass];
        if (addClasses) {
            resClasses.push(...addClasses);
        }

        return resClasses.join(" ");
    }

    const handleInputChange = (checked: boolean) => {
        if (setChecked) {
            setChecked(checked);
        }
        // if (setIsError) {
        //     setIsError(false);
        // }
    }

    // return (
    //     <div className={makeClassName(classes.container, addContainerClassNames)}>
    //         <div className={classes.label_container}>
    //             {/* <label htmlFor={id} className={makeClassName(classes.label, addLabelClassNames)}> */}
    //             <p className={makeClassName(classes.label_normal, addLabelClassNames)}>
    //                 {labelCaption}
    //             </p>
    //         </div>
    //         <input 
    //             type={type} 
    //             className={makeClassName(classes.checkbox_normal, addInputClassNames)} 
    //             onChange={(event) => handleInputChange(event.target.checked)}
    //             checked={checked}
    //             {...rest}
    //         />
    //     </div>
    // );

    return (
        <div className={classes.main_container}>
            <label className={makeClassName(classes.container, addContainerClassNames)}>
                <input 
                    type={type} 
                    className={makeClassName(classes.checkbox, addInputClassNames)} 
                    onChange={(event) => handleInputChange(event.target.checked)}
                    checked={checked}
                    {...rest}
                />
                <span className={classes.checkmark}/>
                {labelCaption}
            </label>
        </div>
    );
}

export default MyLabeledCheckbox;