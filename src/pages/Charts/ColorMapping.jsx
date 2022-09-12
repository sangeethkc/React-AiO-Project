import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  ColumnSeries,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  Inject,
  Category,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import {
  rangeColorMapping,
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="color mapping" title="Color Mapping" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          height="420px"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "33373E" : ""}
        >
          <Inject services={[ColumnSeries, Legend, Category, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="India"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
