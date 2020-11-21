import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const BarChartWrap = styled.div`
    padding: 2.5rem;
    grid-area: chart;
`;

const BarChartComponent = () => {
    const data = {
        labels: ["월", "화", "수", "목", "금", "토", "일"],
        datasets: [
            {
                labels: "e",
                data: [60, 13, 27, 60, 13, 27, 20],
                borderWidth: 1,
                hoverBorderWidth: 1,
                backgroundColor: [
                    "rgba(238, 102, 121, 1)",
                    "rgba(98, 181, 229, 1)",
                    "rgba(255, 198, 0, 1)",
                ],
                fill: true,
            },
        ],
    };
    return (
        <BarChartWrap>
            <Bar
                data={data}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false, label: "ㄸ" }}
            />
        </BarChartWrap>
    );
};

export default BarChartComponent;
