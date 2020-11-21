import styled from "styled-components";
import Video from "./Video";
import VideoDescription from "./VideoDescription";
import Comment from "./Comment";
import refresh from "../../images/refresh.png";
import close from "../../images/close.png";

const ResultCardWrap = styled.div`
    height: auto;
    border: solid 3px #43d2ff;
    box-shadow: 8px 8px #ff934f;
    width: 100%;
    max-width: 90rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const ResultTop = styled.div`
    border-bottom: solid 3px #43d2ff;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const ResultContent = styled.div`
    padding: 1.6rem;
`;

const ResultImage = styled.img`
    width: 2.1rem;
    cursor: pointer;
`;

const ResultCardComponent = ({ data }) => {
    return (
        <ResultCardWrap>
            <ResultTop>
                <ResultImage src={refresh} alt={""} />
                <ResultImage src={close} alt={""} />
            </ResultTop>
            <ResultContent>
                <Comment />
                {data && (
                    <>
                        <Video videoId={data.id} />
                        <VideoDescription
                            hashtagList={data.hashtagList}
                            title={data.title}
                        />
                    </>
                )}
            </ResultContent>
        </ResultCardWrap>
    );
};

export default ResultCardComponent;
