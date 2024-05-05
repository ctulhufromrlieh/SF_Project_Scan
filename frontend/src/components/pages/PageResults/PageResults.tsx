import React, { useEffect, useState } from "react";
import classes from "./PageResults.module.scss";

import imageHeaderRightDesktop from "../../../img/pages/results/header-right-desktop.module.svg";
import imageHeaderRightMobile from "../../../img/pages/results/header-right-mobile.module.svg";
import image1 from "../../../img/pages/results/results-image-1.module.png";
import image2 from "../../../img/pages/results/results-image-2.module.png";


import PageResultsCarousel from "./PageResultsCarousel/PageResultsCarousel";
import { Document, DocumentElem, DocumentType, Histogram, SummaryItem } from "../../../types/api";
import PageResultsDocumentList from "./PageResultsDocumentList/PageResultsDocumentList";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchDocIds } from "../../../store/action-creators/docIds";
import { useActions } from "../../../hooks/useActions";
import Loader from "../../UI/Loader/Loader";
import MyButton, { ButtonColorScheme, ButtonSizeType } from "../../UI/MyButton/MyButton";
// import PageResultsCarouselMobile from "./PageResultsCarouselMobile/PageResultsCarouselMobile";

// import PageSearchForm from "./PageSearchForm/PageSearchForm";
const makeSummaryItems = (totalHistograms: Histogram[], riskHistograms: Histogram[]): SummaryItem[] => {
    
    let res: SummaryItem[] = [];

    const getRiskCountForTotalHistogram = (totalHistogram: Histogram) => {
        const riskHistogram = riskHistograms.find(elem => elem.date === totalHistogram.date);
        if (riskHistogram) {
            return riskHistogram.value;
        } else {
            return 0;
        }
    }

    totalHistograms.map((totalHistogram) => {
        const newSummaryItem: SummaryItem = {
            date: new Date(totalHistogram.date),
            all: totalHistogram.value,
            risks: getRiskCountForTotalHistogram(totalHistogram),
        };
        
        res.push(newSummaryItem);
    })

    return res;
}

const PageResults = () => {
    // const elems: SummaryItem[] = [
    //     {date: new Date("2021-09-10"), all: 5, risks: 0},
    //     {date: new Date("2021-09-13"), all: 2, risks: 0},
    //     {date: new Date("2021-09-17"), all: 6, risks: 0},
    //     {date: new Date("2021-09-20"), all: 8, risks: 2},
    //     {date: new Date("2021-10-12"), all: 1, risks: 0},
    //     {date: new Date("2021-10-15"), all: 10, risks: 2},
    //     {date: new Date("2021-10-16"), all: 4, risks: 0},
    //     {date: new Date("2021-10-17"), all: 3, risks: 0},
    // ];

    const {accessToken} = useTypedSelector(state => state.account);
    const { totalHistograms, riskHistograms } = useTypedSelector(state => state.histogram);
    const docIdsState = useTypedSelector(state => state.docIds);
    const docIdCount = docIdsState.items.length;

    const {fetchDocIds, fetchDocuments} = useActions();
    useEffect(() => {
        fetchDocIds(accessToken);
    }, [totalHistograms]);

    useEffect(() => {
        fetchDocuments(accessToken, 10);
    }, [docIdCount]);

    const documentsState = useTypedSelector(state => state.documents);
    const documentCount = documentsState.items.length;

    const elems: SummaryItem[] = makeSummaryItems(totalHistograms, riskHistograms);
    // console.log("elems: ", elems);

    const docs: Document[] = documentsState.items;
    console.log("docs: ", docs);

    return (
        <div>
            <div className={classes.page}>
                <div className={classes.header}>
                    <div className={classes.header_left}>
                        <h1 className={classes.heading_main}>Ищем. Скоро будут результаты</h1>
                        <p className={classes.sub_heading_description}>Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <div className={classes.header_right}>
                        <div className={classes.header_right_image_container_desktop}>
                            <img src={imageHeaderRightDesktop} alt="Header image for desktop"/>
                        </div>
                        <div className={classes.header_right_image_container_mobile}>
                            <img src={imageHeaderRightMobile} alt="Header image for mobile"/>
                        </div>
                    </div>
                </div>
                <div className={classes.summary}>
                    <div className={classes.summary_header}>
                        <h2 className={classes.heading_std}>Общая сводка</h2>
                        {/* <p className={classes.summary_caption}>
                            {docIdsState.loading 
                            ?
                                <Loader/>
                            :
                                <>Найдено {docIdsState.items.length} вариантов</>
                            }
                        </p> */}                       
                        {docIdsState.loading 
                        ?
                            <Loader/>
                        :
                            <p className={classes.summary_caption}>Найдено {docIdsState.items.length} вариантов</p>
                        }
                            {/* Найдено 4 221 вариантов */}
                    </div>
                    {/* <div className={classes.carousel}>
                        <PageResultsCarousel elems={elems} />
                    </div> */}
                    {
                        elems.length > 0 
                        ? 
                        <div className={classes.carousel}>
                            <PageResultsCarousel elems={elems} />
                        </div>
                        :
                        <></>
                        // <div className={classes.carousel}>
                        //     <p className={classes.heading_std}>Нет сводки</p>
                        // </div>
                    }
                </div>
                <div className={classes.documents}>
                    <h2 className={classes.heading_std}>Список документов</h2>
                    {docs.length > 0 
                        ? 
                        <PageResultsDocumentList docs={docs} /> 
                        : 
                        <p className={classes.heading_std}>Нет документов</p> 
                    }
                    
                    {documentCount < docIdCount &&
                        <div className={classes.more_btn_container}>
                            <MyButton 
                                sizeType={ButtonSizeType.LARGE}
                                colorScheme={ButtonColorScheme.BLUE_WHITE}
                                addClassNames={[classes.more_btn]}
                                disabled={documentsState.loading}
                                onClick={() => fetchDocuments(accessToken, 10)}
                            >
                                Показать больше{docIdsState.loading || documentsState.loading && <span style={{position: "absolute"}}><Loader/></span>}
                            </MyButton>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PageResults;