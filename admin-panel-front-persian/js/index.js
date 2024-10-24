var options = {
    series: [{
        name: "users",
        data: ["200","300","250","350","400","500"]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    xaxis: {
        categories: ["jun","may","apr","mar","feb","jan",],
    }
};
const chartElem = document.querySelector("#chart")
if (chartElem) {
    var chart = new ApexCharts(chartElem, options);
    chart.render();
}
var options = {
    series: [1000, 159, 300],
    labels: ["Mobile", "Desktop", "Tablet"],
    chart: {
        type: 'donut',
        width: 350,
    },
    fill: {
        type: 'gradient',
    },
    dataLabels: {
        enabled: true
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom',
            }
        }
    }]
};
const pieChart = document.querySelector("#pie-chart")
if (pieChart) {
    var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
    chart.render();
}

window.addEventListener("scroll", () => {
    imgWidget.forEach(element => {
        if (window.scrollY >= element.offsetTop - window.innerHeight + 100) {
            element.classList.add("animation")
        } else {
            element.classList.remove("animation")
        }
    });
})

const lastChangesBtn = document.querySelectorAll(".last-changes-btn")

lastChangesBtn.forEach(btn => {
    btn.addEventListener("click" , (e)=> {
       for (let i = 0; i < lastChangesBtn.length; i++) {
        lastChangesBtn[i].classList.remove("active")
       }
       btn.classList.add("active")
    })
});