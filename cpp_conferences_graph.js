let myChart;

export function setupChart() {
  if (myChart) return;
  const ctx = document.getElementById("conferenceChart").getContext("2d");

  // Data based on our discussion
  const data = {
    labels: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
    ],
    datasets: [
      {
        label: "Number of Major C++ Conferences",
        data: [4, 5, 6, 7, 8, 9, 6, 6, 8, 9, 10, 11],
        borderColor: "#667eea",
        backgroundColor: "rgba(102, 126, 234, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: function (context) {
          const index = context.dataIndex;
          if (index >= 6 && index <= 7) return "#ff6b6b"; // Pandemic years
          if (index >= 8) return "#4ecdc4"; // Recovery years
          return "#667eea"; // Normal years
        },
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          cornerRadius: 8,
          titleFont: {
            size: 14,
            weight: "bold",
          },
          bodyFont: {
            size: 13,
          },
          callbacks: {
            afterLabel: function (context) {
              const year = context.label;
              const notes = {
                2014: "CppCon launches",
                2019: "Peak pre-pandemic",
                2020: "COVID-19 impact",
                2021: "Hybrid formats emerge",
                2022: "Return to in-person",
                2025: "Strong recovery",
              };
              return notes[year] || "";
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 12,
          ticks: {
            stepSize: 1,
            font: {
              size: 12,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          title: {
            display: true,
            text: "Number of Conferences",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: 12,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          title: {
            display: true,
            text: "Year",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuart",
      },
    },
  };

  // Create the chart
  myChart = new Chart(ctx, config);

  // Add annotation for pandemic period
  setTimeout(() => {
    // Highlight pandemic period with a subtle overlay
    const chart = myChart;
    const xScale = chart.scales.x;
    const yScale = chart.scales.y;
    const ctx = chart.ctx;

    chart.config.options.plugins.annotation = {
      annotations: {
        box1: {
          type: "box",
          xMin: "2020",
          xMax: "2021",
          backgroundColor: "rgba(255, 107, 107, 0.1)",
          borderWidth: 0,
        },
      },
    };
  }, 100);
}
