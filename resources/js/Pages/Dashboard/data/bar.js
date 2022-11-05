function random() {
    return Math.round(300 + Math.random() * 700) / 10;
}

export default function getData() {
    return {
        textStyle: {
            fontFamily: 'Jost, "Helvetica Neue", Arial, sans-serif'
        },
        title: {
          text: "Top Product Sales",
          left: "center"
        },
        tooltip: {
          trigger: "item",
        },
        dataset: {
            dimensions: ["Product", "2015", "2016", "2017"],
            source: [
                {
                    Product: "Matcha Latte",
                    2015: random(),
                    2016: random(),
                    2017: random()
                },
                {
                    Product: "Milk Tea",
                    2015: random(),
                    2016: random(),
                    2017: random()
                },
                {
                    Product: "Cheese Cocoa",
                    2015: random(),
                    2016: random(),
                    2017: random()
                },
                {
                    Product: "Walnut Brownie",
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
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
    };
}
