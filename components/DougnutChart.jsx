import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  credits: {
    enabled: false,
  },
  chart: {
    backgroundColor: "black",
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: "",
  },
  plotOptions: {
    pie: {
      innerSize: 75,
      depth: 45,
    },
  },
  series: [
    //7,00,00,000
    //10,50,00,000
    //10,50,00,000
    //17,50,00,000
    //21,00,00,000
    //3,50,00,000
    {
      name: "Token Allocation %",
      data: [
        ["ICO Presale Platform: 10%", 10],
        ["Initial Dex Offering: 15%", 15],
        ["Initial Exchange Offering: 15%", 15],
        ["Centralized Exchange Listing: 25%", 25],
        ["Ecosystem Development: 30%", 30],
        ["Marketing & Promotions: 5%", 5],
      ],
    },
  ],
};

const DougnutChart = () => {
  return (
    <div className="w-[100vw]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DougnutChart;
