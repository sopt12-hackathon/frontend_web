import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import MyProfileCardComponent from "../my/MyProfileCardComponent";

const BarChartWrap = styled.div`
    grid-area: chart;
`;

const BarChartComponent = () => {
    const data = {
        labels: ["월", "화", "수", "목", "금", "토", "일"],
        datasets: [
            {
                labels: "e",
                data: [20, 13, 27, 20, 13, 27, 20],
                barThickness: 35,
                backgroundColor: [
                    "#ff934f",
                    "#ff934f",
                    "#ff934f",
                    "#ff934f",
                    "#ff934f",
                    "#ff934f",
                    "#ff934f",
                ],
            },
        ],
    };
    return (
        <BarChartWrap>
            <MyProfileCardComponent
                title={"주간운동시간"}
                type={"chart"}
                content={
                    <Bar
                        data={data}
                        height={120}
                        options={{
                            animation: {
                                duration: 7000,
                            },
                            legend: {
                                display: false,
                                position: "bottom",
                            },
                            title: {
                                display: false,
                                text: "1st week 2020",
                            },
                            scales: {
                                pointLabels: {
                                    fontStyle: "bolder",
                                },
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: false,
                                            fontStyle: "blod",
                                            fontColor: "black",
                                            stepSize: 5,
                                        },
                                        gridLines: {
                                            display: false,
                                        },
                                    },
                                ],
                                xAxes: [
                                    {
                                        ticks: {
                                            fontStyle: "blod",
                                            fontColor: "black",
                                        },
                                        gridLines: {
                                            display: false,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                }
            />
        </BarChartWrap>
    );
};

export default BarChartComponent;
