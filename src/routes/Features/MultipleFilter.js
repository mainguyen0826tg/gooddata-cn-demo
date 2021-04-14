import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newMeasureValueFilter } from "@gooddata/sdk-model";
import { newRankingFilter } from "@gooddata/sdk-model";

import { Ldm, LdmExt } from "../../ldm";

const measures = [LdmExt.Price];

const attributes = [LdmExt.CampaignName];
// const rankingfilters = [newRankingFilter(LdmExt.totalPriceLocalId, "TOP", 3)];
const rankingfilters = [newRankingFilter(LdmExt.totalPriceLocalId, "TOP", 3)];

// const rankingfilters = [newRankingFilter(LdmExt.Price, "TOP", 1)];

const greaterThanFilter = newMeasureValueFilter(LdmExt.totalPriceLocalId, "GREATER_THAN", 70);

// const rankingfilters = newMeasureValueFilter(LdmExt.Price, "BETWEEN", 50, 60);


export class MultipleFilter extends Component {
    state = {
        filters: [],
    };

    renderPresetButton(label, appliedFilters, isActive) {
        return (
            <button
                className={`gd-button gd-button-secondary ${isActive ? "is-active" : ""} s-filter-button`}
                onClick={() =>
                    this.setState({
                        filters: appliedFilters,
                    })
                }
            >
                {label}
            </button>
        );
    }

    render() {
        const { filters } = this.state;
        return (
            <div>
                <div>
                    {this.renderPresetButton("All", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Price > 70",
                        [greaterThanFilter],
                        filters[0] === greaterThanFilter,
                    )}

                    {this.renderPresetButton(
                        "Ranking",
                       [newRankingFilter(LdmExt.totalPriceLocalId, "TOP", 3)]
                        // [rankingfilters],
                        // filters[0] === rankingfilters,
                    )}
                </div>
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </div>
        );
    }
}

export default MultipleFilter;