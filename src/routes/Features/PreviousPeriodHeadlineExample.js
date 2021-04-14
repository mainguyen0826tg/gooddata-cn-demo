import React, { Component } from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { newPreviousPeriodMeasure, newRelativeDateFilter } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../ldm";

export class PreviousPeriodHeadlineExample extends Component {
    onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
    };

    onError = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onError", ...params);
    };

    render() {
        const primaryMeasure = LdmExt.Price;
        const secondaryMeasure = newPreviousPeriodMeasure(
            LdmExt.Price,
            [{ dataSet: Ldm.DateDatasets.Date1.identifier, periodsAgo: 1 }],
            (m) => m.alias("$ Total Price - period ago"),
        );

        return (
            <div style={{ height: 125 }} className="s-headline">
                <Headline
                    primaryMeasure={primaryMeasure}
                    secondaryMeasure={secondaryMeasure}
                    filters={[newRelativeDateFilter(Ldm.DateDatasets.Date1.ref, "GDC.time.year", -4, -3)]}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default PreviousPeriodHeadlineExample;