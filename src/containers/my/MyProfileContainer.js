import React, { useEffect } from "react";
import MyGridComponent from "../../components/common/MyGridComponent";
import MyBedgeComponent from "../../components/my/MyBedgeComponent";
import MyProfileComponent from "../../components/my/MyProfileComponent";
import MyTotalComponent from "../../components/my/MyTotalComponent";
import ChartContainer from "../chart/ChartContainer";
import { useDispatch, useSelector } from "react-redux";
import { mychartResult } from "../../modules/mychart";

const MyProfileContainer = () => {
    const dispatch = useDispatch();

    const { username, loading } = useSelector(({ mychart, loading }) => ({
        username: mychart.data,
        loading: loading["mychart/MYCHART_RESULT"],
    }));

    console.log(loading);
    useEffect(() => {
        dispatch(mychartResult());
    }, [dispatch]);

    return (
        <MyGridComponent>
            <MyProfileComponent />
            <MyTotalComponent />
            <MyBedgeComponent />
            <ChartContainer />
        </MyGridComponent>
    );
};

export default MyProfileContainer;
