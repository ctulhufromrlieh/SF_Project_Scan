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
import { useNavigate } from "react-router";
import Loader from "../../../UI/Loader/Loader";

const PageSearchForm = () => {
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

    const histogramQuery = useTypedSelector(state => state.histogramQuery);

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

    const navigate = useNavigate();

    const setRange = (range: DateRange) => {
        // console.log(range);
        setDate1(range.value1);
        setDate2(range.value2);
    };

    const search = () => {
        checkParams();
        fetchHistograms(accessToken, navigate);
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
                        disabled={!isReady || histogramQuery.loading}
                        onClick={search}
                        >
                        Поиск{histogramQuery.loading && <span style={{position: "absolute"}}><Loader/></span>}
                    </MyButton>
                    <p className={classes.mark_description}>* Обязательные к заполнению поля</p>
                </div>
            </div>
        </div>
    );
}

export default PageSearchForm;