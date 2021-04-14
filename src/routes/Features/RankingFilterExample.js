import React, { useState } from "react";
import { LdmExt, Ldm } from "../../ldm";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newRankingFilter, localIdRef, measureLocalId, attributeLocalId } from "@gooddata/sdk-model";
import { RankingFilter } from "@gooddata/sdk-ui-filters";
import { InsightView } from "@gooddata/sdk-ui-ext";


const measures = [LdmExt.Price, LdmExt.Quanlity];
const attributes = [LdmExt.CampaignName, LdmExt.OrderStatus];
const columns = [LdmExt.CampaignName];


export const measureDropdownItems = [
    {
        title: "$ Price sales",
        ref: localIdRef(measureLocalId(LdmExt.Price)),
        sequenceNumber: "M1",
    },

    {
        title: "Quanlity sales",
        ref: localIdRef(measureLocalId(LdmExt.Quanlity)),
        sequenceNumber: "M2",
    },
];

export const attributeDropdownItems = [
    {
        title: "Location state",
        ref: localIdRef(attributeLocalId(LdmExt.CampaignName)),
        type: "ATTRIBUTE",
    },

    {
        title: "Location",
        ref: localIdRef(attributeLocalId(LdmExt.OrderStatus)),
        type: "ATTRIBUTE",
    },
];

const PresetButtonComponent = ({ title, isActive, onClick }) => (
    <button
        className={`gd-button gd-button-secondary gd-button-small ${
            isActive ? "is-active" : ""
        } s-filter-button`}
        onClick={onClick}
    >
        {title}
    </button>
);

export const RankingFilterExample = () => {
    const [filters, setFilters] = useState([]);
    return (
        <React.Fragment>
            <PresetButtonComponent
                title="No filter"
                isActive={filters.length === 0}
                onClick={() => setFilters([])}
            />

            <PresetButtonComponent
                title="Apply ranking filter"
                isActive={filters.length > 0}
                onClick={() => setFilters([newRankingFilter(LdmExt.totalPriceLocalId, "TOP", 3)])}
            />

            {filters.length > 0 && (
                <RankingFilter
                    measureItems={measureDropdownItems}
                    attributeItems={attributeDropdownItems}
                    filter={filters[0]}
                    onApply={(filter) => setFilters([filter])}
                    buttonTitle={"Ranking filter configuration"}
                />
            )}

            <hr className="separator" />
            <div>
            <div style={{ height: 300 }} className="s-pivot-table">
                <PivotTable 
                    measures={measures} 
                    rows={attributes} 
                    // columns={columns}
                    filters={filters} />
            </div>

            {/* <div style={{ height: 300 }} className="s-pivot-table">
                <InsightView 
                     insight={Ldm.Insights.MVF} 
                 />            
            </div> */}

            </div>
            
        </React.Fragment>
    );
};