import { graphic } from "echarts/core";

const data = [
    [
        [28604, 77, 17096869, "Australia", 2019],
        [31163, 77.4, 27662440, "Canada", 2019],
        [1516, 68, 1154605773, "China", 2019],
        [13670, 74.7, 10582082, "Cuba", 2019],
        [28599, 75, 4986705, "Finland", 2019],
        [29476, 77.1, 56943299, "France", 2019],
        [31476, 75.4, 78958237, "Germany", 2019],
        [28666, 78.1, 254830, "Iceland", 2019],
        [1777, 57.7, 870601776, "India", 2019],
        [29550, 79.1, 122249285, "Japan", 2019],
        [2076, 67.9, 20194354, "North Korea", 2019],
        [12087, 72, 42972254, "South Korea", 2019],
        [24021, 75.4, 3397534, "New Zealand", 2019],
        [43296, 76.8, 4240375, "Norway", 2019],
        [10088, 70.8, 38195258, "Poland", 2019],
        [19349, 69.6, 147568552, "Russia", 2019],
        [10670, 67.3, 53994605, "Turkey", 2019],
        [26424, 75.7, 57110117, "United Kingdom", 2019],
        [37062, 75.4, 252847810, "United States", 2019]
    ],
    [
        [44056, 81.8, 23968973, "Australia", 2021],
        [43294, 81.7, 35939927, "Canada", 2021],
        [13334, 76.9, 1376048943, "China", 2021],
        [21291, 78.5, 11389562, "Cuba", 2021],
        [38923, 80.8, 5503457, "Finland", 2021],
        [37599, 81.9, 64395345, "France", 2021],
        [44053, 81.1, 80688545, "Germany", 2021],
        [42182, 82.8, 329425, "Iceland", 2021],
        [5903, 66.8, 1311050527, "India", 2021],
        [36162, 83.5, 126573481, "Japan", 2021],
        [1390, 71.4, 25155317, "North Korea", 2021],
        [34644, 80.7, 50293439, "South Korea", 2021],
        [34186, 80.6, 4528526, "New Zealand", 2021],
        [64304, 81.6, 5210967, "Norway", 2021],
        [24787, 77.3, 38611794, "Poland", 2021],
        [23038, 73.13, 143456918, "Russia", 2021],
        [19360, 76.5, 78665830, "Turkey", 2021],
        [38225, 81.4, 64715810, "United Kingdom", 2021],
        [53354, 79.1, 321773631, "United States", 2021]
    ]
];

export default {
    textStyle: {
        fontFamily: 'Jost, "Helvetica Neue", Arial, sans-serif'
    },
    title: {
        text: "Revenue vs. Realization"
    },
    legend: {
        right: 10,
        data: ["2019", "2021"]
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: "dashed"
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: "dashed"
            }
        },
        scale: true
    },
    series: [
        {
            name: "2019",
            data: data[0],
            type: "scatter",
            symbolSize(data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter({ data }) {
                        return data[3];
                    },
                    position: "top"
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(120, 36, 50, 0.5)",
                shadowOffsetY: 5,
                color: new graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                        offset: 0,
                        color: "rgb(251, 118, 123)"
                    },
                    {
                        offset: 1,
                        color: "rgb(204, 46, 72)"
                    }
                ])
            }
        },
        {
            name: "2021",
            data: data[1],
            type: "scatter",
            symbolSize(data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter({ data }) {
                        return data[3];
                    },
                    position: "top"
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(25, 100, 150, 0.5)",
                shadowOffsetY: 5,
                color: new graphic.RadialGradient(0.4, 0.3, 1, [
                    {
                        offset: 0,
                        color: "rgb(129, 227, 238)"
                    },
                    {
                        offset: 1,
                        color: "rgb(25, 183, 207)"
                    }
                ])
            }
        }
    ]
};
