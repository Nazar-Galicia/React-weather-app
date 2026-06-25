import {useRef} from "react";

export const useElementRef = () => {
    const weatherSummaryCityCardRef = useRef(null);
    const weatherSummaryTempRef = useRef(null);

    return {
        weatherSummaryCityCardRef,
        weatherSummaryTempRef,
    }
}