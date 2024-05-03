import React, { useState } from "react";
import classes from "./PageSearchForm.module.scss";
import MyLabeledInput from "../../../UI/MyLabeledInput/MyLabeledInput";
import MyLabeledSelect, { SelectOption } from "../../../UI/MyLabeledSelect/MyLabeledSelect";
import MyLabeledDateRange, { DateRange } from "../../../UI/MyLabeledDateRange/MyLabeledDateRange";
import MyLabeledCheckbox from "../../../UI/MyLabeledCheckbox/MyLabeledCheckbox";
import MyButton, { ButtonColorScheme, ButtonSizeType } from "../../../UI/MyButton/MyButton";
import { Tone } from "../../../../types/api";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { searchQueryReducer } from "../../../../store/reducers/searchQueryReducer";
import { SearchQueryState } from "../../../../types/searchQuery";
import { checkParams } from "../../../../store/action-creators/searchQuery";

const PageSearchForm = () => {
    // const [inn, setInn] = useState("");
    // const [isInnError, setIsInnError] = useState(false);
    // // const [isInnError, setIsInnError] = useState(true);
    // const [tone, setTone] = useState("any");
    // const [count, setCount] = useState(10);
    // const [isCountError, setIsCountError] = useState(false);
    // // const [isCountError, setIsCountError] = useState(true);
    // const [range, setRange] = useState<DateRange>({value1: "", value2: ""});
    // const [isRangeError, setIsRangeError] = useState(false);
    // // const [isRangeError, setIsRangeError] = useState(true);
    // const [isMaxFullness, setIsMaxFullness] = useState(true);
    // const [isBusinesContext, setIsBusinesContext] = useState(true);
    // const [isMainRole, setIsMainRole] = useState(true);
    // const [isOnlyRiskFactors, setIsOnlyRiskFactors] = useState(false);
    // const [isIncludeTechNews, setIsIncludeTechNews] = useState(false);
    // const [isIncludeAnounces, setIsIncludeAnounces] = useState(true);
    // const [isIncludeSumNews, setIsIncludeSumNews] = useState(false);
    // const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    

    // const innChangeHandler = (value: string) => {
    //     setInn(value);
    //     // setIsSubmitEnabled(isPrimaryCorrectData(value, password));
    // };

    // const countChangeHandler = (value: string) => {
    //     try {
    //         setCount(Number(value));
    //     } catch {
    //         setCount(0);
    //     }
        
    //     // setIsSubmitEnabled(isPrimaryCorrectData(value, password));
    // };

    // const toneOptions: SelectOption[] = [
    //     {value: "positive", caption: "позитивная"},
    //     {value: "negative", caption: "негативная"},
    //     {value: "any", caption: "любая"},
    // ];
    const toneOptions: SelectOption[] = [
        {value: Tone.POSITIVE, caption: "позитивная"},
        {value: Tone.NEGATIVE, caption: "негативная"},
        {value: Tone.NEUTRAL, caption: "нейтральная"},
        {value: Tone.ANY, caption: "любая"},
    ];

    const typedSelector = useTypedSelector;
    // const {
    //     inn, isInnError,
    //     tone,
    //     count, isCountError,
    //     date1, date2, isDateError,
    //     maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors,
    //     excludeTechNews, excludeAnnouncements, excludeDigests,
    //     isReady,
    // } = useTypedSelector(state => state.searchQuery);
    const {accessToken} = useTypedSelector(state => state.account);

    const searchQueryState: SearchQueryState = useTypedSelector(state => state.searchQuery);
    const {
        inn, isInnError,
        tone,
        count, isCountError,
        date1, date2, isDateError,
        maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors,
        excludeTechNews, excludeAnnouncements, excludeDigests,
        isReady,
    } = searchQueryState;

    // const getSearchQueryState = () => {
    //     return typedSelector(state => state.searchQuery);
    // }

    const {
        setInn,
        setTone,
        setCount,
        setDate1,
        setDate2,
        setMaxFullness, setInBusinessNews, setOnlyMainRole, setOnlyWithRiskFactors,
        setExcludeTechNews, setExcludeAnnouncements, setExcludeDigests, checkParams,
        fetchHistograms,
    } = useActions();

    const setRange = (range: DateRange) => {
        // console.log(range);
        setDate1(range.value1);
        setDate2(range.value2);
    };

    const search = () => {
        // console.log("1", searchQueryState);
        checkParams();
        // console.log("2", searchQueryState);
        // const sq = typedSelector(state => state.searchQuery);
        fetchHistograms(accessToken, searchQueryState);
        // fetchHistograms(accessToken, sq);
    }

    // console.log("date1: ", date1, "date2: ", date2);
    // console.log("date1 < date2", date1 < date2);
    // console.log("count: ", count);

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
                                setValue={(value) => setInn(value)} 
                                isError={isInnError}
                                // isError={true}
                                // setIsError={(value) => setIsInnError(value)}
                                addContainerClassNames={[classes.inn_container]}
                            />
                <MyLabeledSelect 
                    id="search-form__tone"
                    labelCaption="Тональность"
                    value={tone}
                    setValue={(value) => setTone(value as Tone)}
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
                    setValue={(value) => setCount(value)} 
                    isError={isCountError}
                    // isError={true}
                    // setIsError={(value) => setIsCountError(value)}
                    addContainerClassNames={[classes.count_container]}
                    addLabelClassNames={[classes.count_label]}
                    addInputClassNames={[classes.count_input]}
                />
                <MyLabeledDateRange
                    labelCaption="Диапазон поиска"
                    isLabelMarked={true}
                    errorCaption="Введите корректные данные"
                    range={{value1: date1, value2: date2}}
                    setRange={setRange}
                    isError={isDateError}
                    // isError={true}
                    // setIsError={(value) => setIsRangeError(value)}
                    addContainerClassNames={[classes.date_range_container]}
                    addInputClassNames={[classes.date_range_input]}
                />
            </div>
            <div className={classes.right_part}>
                <div className={classes.checkbox_list}>
                    <MyLabeledCheckbox
                        labelCaption="Признак максимальной полноты"
                        checked={maxFullness}
                        setChecked={setMaxFullness}
                    />
                    <MyLabeledCheckbox
                        labelCaption="Упоминания в бизнес-контексте"
                        checked={inBusinessNews}
                        setChecked={setInBusinessNews}
                    />
                    <MyLabeledCheckbox
                        labelCaption="Главная роль в публикации"
                        checked={onlyMainRole}
                        setChecked={setOnlyMainRole}
                    />
                    <MyLabeledCheckbox
                        labelCaption="Публикации только с риск-факторами"
                        checked={onlyWithRiskFactors}
                        setChecked={setOnlyWithRiskFactors}
                    />
                    <MyLabeledCheckbox
                        labelCaption="Включать технические новости рынков"
                        checked={!excludeTechNews}
                        setChecked={(value) => setExcludeTechNews(!value)}
                    />
                    <MyLabeledCheckbox
                        labelCaption="Включать анонсы и календари"
                        checked={!excludeAnnouncements}
                        setChecked={(value) => setExcludeAnnouncements(!value)}
                    />
                    <MyLabeledCheckbox
                        labelCaption="Включать сводки новостей"
                        checked={!excludeDigests}
                        setChecked={(value) => setExcludeDigests(!value)}
                    />
                </div>
                <div className={classes.search_btn_container}>
                    <MyButton
                        sizeType={ButtonSizeType.NORMAL} 
                        colorScheme={ButtonColorScheme.BLUE_WHITE} 
                        addClassNames={[classes.search_btn]}
                        disabled={!isReady}
                        onClick={search}
                        >
                        Поиск
                    </MyButton>
                    <p className={classes.mark_description}>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </div>
    );

    // return (
    //     <div className={classes.search_form}>
    //         <div className={classes.left_part}>
    //             <MyLabeledInput 
    //                             id="search-form__inn"
    //                             type="text"
    //                             labelCaption="ИНН компании"
    //                             isLabelMarked={true}
    //                             errorCaption="Введите корректные данные" 
    //                             value={inn}
    //                             setValue={(value) => innChangeHandler(value)} 
    //                             isError={isInnError}
    //                             setIsError={(value) => setIsInnError(value)}
    //                             addContainerClassNames={[classes.inn_container]}
    //                         />
    //             <MyLabeledSelect 
    //                 id="search-form__tone"
    //                 labelCaption="Тональность"
    //                 value={tone}
    //                 setValue={(value) => setTone(value)}
    //                 options={toneOptions}
    //                 addContainerClassNames={[classes.tone_container]}
    //             />
    //             <MyLabeledInput 
    //                 id="search-form__count"
    //                 type="text"
    //                 labelCaption="Количество документов в выдаче"
    //                 isLabelMarked={true}
    //                 errorCaption="Обязательное поле" 
    //                 errorPlaceholder="От 1 до 1000"
    //                 value={count}
    //                 setValue={(value) => countChangeHandler(value)} 
    //                 isError={isCountError}
    //                 setIsError={(value) => setIsCountError(value)}
    //                 addContainerClassNames={[classes.count_container]}
    //                 addLabelClassNames={[classes.count_label]}
    //                 addInputClassNames={[classes.count_input]}
    //             />
    //             <MyLabeledDateRange
    //                 labelCaption="Диапазон поиска"
    //                 isLabelMarked={true}
    //                 errorCaption="Введите корректные данные"
    //                 range={range}
    //                 setRange={(range) => setRange(range)}
    //                 isError={isRangeError}
    //                 setIsError={(value) => setIsRangeError(value)}
    //                 addContainerClassNames={[classes.date_range_container]}
    //                 addInputClassNames={[classes.date_range_input]}
    //             />
    //         </div>
    //         <div className={classes.right_part}>
    //             <div className={classes.checkbox_list}>
    //                 <MyLabeledCheckbox
    //                     labelCaption="Признак максимальной полноты"
    //                     checked={isMaxFullness}
    //                     setChecked={setIsMaxFullness}
    //                 />
    //                 <MyLabeledCheckbox
    //                     labelCaption="Упоминания в бизнес-контексте"
    //                     checked={isBusinesContext}
    //                     setChecked={setIsBusinesContext}
    //                 />
    //                 <MyLabeledCheckbox
    //                     labelCaption="Главная роль в публикации"
    //                     checked={isMainRole}
    //                     setChecked={setIsMainRole}
    //                 />
    //                 <MyLabeledCheckbox
    //                     labelCaption="Публикации только с риск-факторами"
    //                     checked={isOnlyRiskFactors}
    //                     setChecked={setIsOnlyRiskFactors}
    //                 />
    //                 <MyLabeledCheckbox
    //                     labelCaption="Включать технические новости рынков"
    //                     checked={isIncludeTechNews}
    //                     setChecked={setIsIncludeTechNews}
    //                 />
    //                 <MyLabeledCheckbox
    //                     labelCaption="Включать анонсы и календари"
    //                     checked={isIncludeAnounces}
    //                     setChecked={setIsIncludeAnounces}
    //                 />
    //                 <MyLabeledCheckbox
    //                     labelCaption="Включать сводки новостей"
    //                     checked={isIncludeSumNews}
    //                     setChecked={setIsIncludeSumNews}
    //                 />
    //             </div>
    //             <div className={classes.search_btn_container}>
    //                 <MyButton
    //                     sizeType={ButtonSizeType.NORMAL} 
    //                     colorScheme={ButtonColorScheme.BLUE_WHITE} 
    //                     addClassNames={[classes.search_btn]}
    //                     disabled={!isSubmitEnabled}>
    //                     Поиск
    //                 </MyButton>
    //                 <p className={classes.mark_description}>* Обязательные к заполнению поля</p>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default PageSearchForm;