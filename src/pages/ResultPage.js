import React from "react";
import ResultContainer from "../containers/result/ResultContainer";
import GlobalTemplate from "../components/common/GlobalTemplate";

const ResultPage = ({match}) => {
    return (
        <>
            <GlobalTemplate>
                <ResultContainer match={match}/>
            </GlobalTemplate>
        </>
    );
};

export default ResultPage;
