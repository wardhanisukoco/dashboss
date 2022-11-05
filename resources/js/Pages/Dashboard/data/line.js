function random() {
    return Math.round(300 + Math.random() * 700) / 10;
}

export default function getData() {
    return {
        textStyle: {
            fontFamily: 'Jost, "Helvetica Neue", Arial, sans-serif'
        },
        title: {
          text: "Store Revenue Yearly",
          left: "center"
        },
        tooltip: {
          trigger: "item",
        },
        dataset: {
            dimensions: ["Store", "2015", "2016", "2017"],
            source: [
                {
                    Store: "Store London",
                    2015: random(),
                    2016: random(),
                    2017: random()
                },
                {
                    Store: "Store Paris",
                    2015: random(),
                    2016: random(),
                    2017: random()
                },
                {
                    Store: "Store Jakarta",
                    2015: random(),
                    2016: random(),
                    2017: random()
                },
                {
                    Store: "Store California",
                    2015: random(),
                    2016: random(),
                    2017: random()
                }
            ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "line" }, { type: "line" }, { type: "line" }]
    };
}
