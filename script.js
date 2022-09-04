const canvasEl = document.getElementById("spendingChart").getContext("2d");

const barColours = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)"]
const hoverBarColors = ["hsla(10, 79%, 65%, 70%)", "hsla(10, 79%, 65%, 70%)", "hsla(186, 34%, 60%, 70%)", "hsla(10, 79%, 65%, 70%)", "hsla(10, 79%, 65%, 70%)", "hsla(10, 79%, 65%, 70%)", "hsla(10, 79%, 65%, 70%)"]

const xAxis = [];
const yAxis = [];

jsonFile();

async function jsonFile() {
    const url = ("./data.json");
    const config = {
        cache: "no-cache",
    }

    const res = await fetch(url, config);
    const data = await res.json();

    for(let i = 0; i < data.length; i++) {
        xAxis.push(data[i].day);
        yAxis.push(data[i].amount);
    }

    const barChart = new Chart(canvasEl, {
    type: "bar",
    data: {
        labels: xAxis,
        datasets: [{
            data: yAxis,   
            backgroundColor: barColours,
            hoverBackgroundColor: hoverBarColors,
        }],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },

            tooltip: {
                displayColors: false,
                backgroundColor: "hsl(25, 47%, 15%)",
                padding: "8",
                bodyFont:  {
                    family: "'DM Sans', sans-serif",
                    weight: "700",
                    size: "14px",
                },
                yAlign: 'bottom',    
                callbacks: {
                    title: () => (""),
                    label: function(context) {
                        let label = context.dataset.label || '';
            
                        if (context.parsed.y !== null) {
                          label += new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                          }).format(context.parsed.y);
                        }
                        return label;
                      }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    color: "hsl(28, 10%, 53%)",
                    font: {
                        family: "'DM Sans', sans-serif",
                        size: "13px",
                        weight: 400,
                    }
                },
            },
            y: {
                grid: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    callback: (value) => {
                        return '$' + value;
                    }
                }
                
            },
        },
        onHover: (e, activeElements) => {
            if (activeElements?.length > 0) {
              e.native.target.style.cursor = 'pointer';
            } else {
              e.native.target.style.cursor = 'auto';
            }
        },
        borderRadius: 5,
        borderSkipped: false,
    }
});

}



