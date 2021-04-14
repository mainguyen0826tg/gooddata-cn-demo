import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newPopMeasure, newPreviousPeriodMeasure } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../ldm";

// const totalSalesYearAgo = newPopMeasure(Ldm.Price.Sum, Ldm.DateDatasets.Date1.Date1Year.ref, (m) =>
//     m.alias("$ Total Price - SP year ago"),
// );
const secondaryMeasure = newPreviousPeriodMeasure(
    LdmExt.Price,
    [{ dataSet: Ldm.DateDatasets.Date1.identifier, periodsAgo: 1 }],
    (m) => m.alias("$ Total Price - period ago"),
);

const style = { height: 300 };

export const SamePeriodColumnChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            {/* <ColumnChart measures={[Ldm.Price.Sum, secondaryMeasure]} viewBy={Ldm.Date1QuarterYear} /> */}

            <ColumnChart measures={[Ldm.Price.Sum, secondaryMeasure]} viewBy={Ldm.DateDatasets.Date1.Date1Year.Default} />

        </div>
    );
};