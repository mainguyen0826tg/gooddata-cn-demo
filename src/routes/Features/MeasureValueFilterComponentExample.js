import React from "react";
import { measureLocalId } from "@gooddata/sdk-model";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newMeasureSort, newAttributeSort } from "@gooddata/sdk-model";



import { Ldm, LdmExt } from "../../ldm";

const measureTitle = "Franchised Sales";
const measures = [LdmExt.Price];

const measures1 = [LdmExt.PriceratioWithRatio];

const attributes = [Ldm.DateDatasets.Date1.Date1Year.Default, LdmExt.OrderStatus];

const defaultFilter = {
    measureValueFilter: {
        measure: measures,
    },
};

export class MeasureValueFilterComponentExample extends React.PureComponent {
    state = {
        filters: [],
    };

    onApply = (filter) => {
        this.setState({ filters: [filter ?? defaultFilter] });
    };

    render() {
        const { filters } = this.state;
        return (
            <React.Fragment>
                <MeasureValueFilter
                    onApply={this.onApply}
                    filter={filters[0]}
                    buttonTitle={measureTitle}
                    // usePercentage
                    warningMessage="The filter uses actual measure values, not percentage."
                    measureIdentifier={measureLocalId(LdmExt.PriceratioWithRatio)}
                />

                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable 
                        measures={measures} 
                        rows={attributes} 
                        filters={filters} 
                        sortBy={[newAttributeSort(LdmExt.OrderStatus, "desc")]}
                        />
                </div>
                <div style={{ height: 300 }} className="s-pivot-table">
                    <ColumnChart 
                        measures={measures1} 
                        viewBy={attributes} 
                        filters={filters} 
                        sortBy={[newMeasureSort(LdmExt.PriceratioWithRatio, "asc")]}
                        />
                </div>
            </React.Fragment>
        );
    }
}

export default MeasureValueFilterComponentExample;