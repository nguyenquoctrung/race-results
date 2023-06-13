import React from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

export interface IRaceResults {
  year: string;
  grandPrix: string;
  date: string;
  winner: string;
  car: string;
  laps: string;
  time: string;
}

export interface IChart {
  data: IRaceResults[];
}

export const RaceResultChart = ({ data }: IChart): JSX.Element => {
  const categories = data?.map((t) => t.winner);
  const dataSeries = data?.map((t) => {
    return { ...t, y: parseInt(t.laps) };
  });
  console.log(dataSeries);
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories,
    },
    yAxis: {
      title: undefined,
      min: 0,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
      series: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    tooltip: {
      borderWidth: 1,
      padding: 20,
      formatter: function () {
        return `${this.y} laps`;
      },
    },
    series: [
      {
        type: "column",
        data: dataSeries,
        states: {
          select: {
            color: "blue",
          },
        },
        allowPointSelect: true,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
