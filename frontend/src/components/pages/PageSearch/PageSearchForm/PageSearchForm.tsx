import React, { useState } from "react";
import classes from "./PageSearchForm.module.scss";
import MyLabeledInput from "../../../UI/MyLabeledInput/MyLabeledInput";
import MyLabeledSelect, { SelectOption } from "../../../UI/MyLabeledSelect/MyLabeledSelect";
import MyLabeledDateRange, { DateRange } from "../../../UI/MyLabeledDateRange/MyLabeledDateRange";

const PageSearchForm = () => {
    const [inn, setInn] = useState("");
    const [isInnError, setIsInnError] = useState(false);
    // const [isInnError, setIsInnError] = useState(true);
    const [tone, setTone] = useState("any");
    const [count, setCount] = useState(10);
    const [isCountError, setIsCountError] = useState(false);
    // const [isCountError, setIsCountError] = useState(true);
    const [range, setRange] = useState<DateRange>({value1: "", value2: ""});
    const [isRangeError, setIsRangeError] = useState(false);
    // const [isRangeError, setIsRangeError] = useState(true);
    

    const innChangeHandler = (value: string) => {
        setInn(value);
        // setIsSubmitEnabled(isPrimaryCorrectData(value, password));
    };

    const countChangeHandler = (value: string) => {
        try {
            setCount(Number(value));
        } catch {
            setCount(0);
        }
        
        // setIsSubmitEnabled(isPrimaryCorrectData(value, password));
    };

    const toneOptions: SelectOption[] = [
        {value: "positive", caption: "позитивная"},
        {value: "negative", caption: "негативная"},
        {value: "any", caption: "любая"},
    ];

    return (
        <div className={classes.search_form}>
            <div className={classes.left_part}>
                <MyLabeledInput 
                                id="search-form__inn"
                                type="text"
                                labelCaption="ИНН компании"
                                isLabelMarked={true}
                                errorCaption="Введите корректные данные" 
                                value={inn}
                                setValue={(value) => innChangeHandler(value)} 
                                isError={isInnError}
                                setIsError={(value) => setIsInnError(value)}
                                addContainerClassNames={[classes.inn_container]}
                            />
                <MyLabeledSelect 
                    id="search-form__tone"
                    labelCaption="Тональность"
                    value={tone}
                    setValue={(value) => setTone(value)}
                    options={toneOptions}
                    addContainerClassNames={[classes.tone_container]}
                />
                <MyLabeledInput 
                    id="search-form__count"
                    type="text"
                    labelCaption="Количество документов в выдаче"
                    isLabelMarked={true}
                    errorCaption="Обязательное поле" 
                    errorPlaceholder="От 1 до 1000"
                    value={count}
                    setValue={(value) => countChangeHandler(value)} 
                    isError={isCountError}
                    setIsError={(value) => setIsCountError(value)}
                    addContainerClassNames={[classes.count_container]}
                    addLabelClassNames={[classes.count_label]}
                    addInputClassNames={[classes.count_input]}
                />
                <MyLabeledDateRange
                    labelCaption="Диапазон поиска"
                    isLabelMarked={true}
                    errorCaption="Введите корректные данные"
                    range={range}
                    setRange={(range) => setRange(range)}
                    isError={isRangeError}
                    setIsError={(value) => setIsRangeError(value)}
                    addContainerClassNames={[classes.date_range_container]}
                    addInputClassNames={[classes.date_range_input]}
                />
            </div>
            <div className={classes.right_part}>
                
            </div>
        </div>
    );
}

export default PageSearchForm;