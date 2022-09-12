import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PyramidSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

import { PyramidData } from "../../data/dummy";

const Pyramid = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Pyramid Chart" />
      <AccumulationChartComponent
        id="pyramid-chart"
        legendSettings={{ background: "white" }}
        background={currentMode === "Dark" ? "33373E" : ""}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            PyramidSeries,
            AccumulationLegend,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="45%"
            height="80%"
            neckHeight="15%"
            explode={true}
            gapRatio={0.03}
            emptyPointSettings={{ mode: "Drop", fill: "red" }}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
              font: {
                fontWeight: "600",
              },
            }}
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
