import Video from '../../components/result/Video';
import VideoDescription from '../../components/result/VideoDescription';
import TopFrame from '../../components/result/TopFrame';
import BottomFrame from '../../components/result/BottomFrame';
import ResetButton from '../../components/result/ResetButton';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {recomendResult} from '../../modules/result';

const ResultContainer = ({match}) => {
    const dispatch = useDispatch();
    // 서버에서 비디오 id 받아오기 + 비디오 제목, 해시태그 (받아와서 state값 바꾸는거 dispatch 같은데 모르겠음!! )
    // dispatch(recomendResult(2));
    useEffect(()=>{
        dispatch(recomendResult(match.params.time))
    }, [match.params.time]);

    const {data, loading} = useSelector(({result, loading}) => ({
        data: result.data,
        loading: loading["result/RESULT"]
    }));

    return (
        <>
            <TopFrame><ResetButton time = {match.params.time}/></TopFrame>
            <BottomFrame data={data}></BottomFrame>
            
        </>
    );
}
export default ResultContainer;