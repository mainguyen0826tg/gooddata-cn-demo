// (C) 2007-2019 GoodData Corporation
import React, { useState } from "react";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { attributeIdentifier, measureIdentifier } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../ldm";
import { InsightView } from "@gooddata/sdk-ui-ext";
import isNil from "lodash/isNil";


const measures = [
    LdmExt.BudgetSum,
    LdmExt.BudgetAvg,
    Ldm.Spend.Avg,
    Ldm.Spend.Sum
];

const attributes = [LdmExt.Category, LdmExt.Type];
// const attributes = [Ldm.Category, Ldm.Type];


const columns = [LdmExt.CampaignName];
// const columns = [Ldm.CampaignName];


const drillableItems = [
    HeaderPredicates.identifierMatch(attributeIdentifier(LdmExt.Type)),
    HeaderPredicates.identifierMatch(measureIdentifier(LdmExt.BudgetSum)),
        // HeaderPredicates.identifierMatch(measureIdentifier(Ldm.Budget.Sum)),

];

const style = { height: 500 };

export const DrillingPivotExamples = () => {
    const [drillEvent, setState] = useState();

    const onDrill = (drillEvent) => {
        setState(drillEvent);
    };

    let renderDrillValue;
    if (drillEvent) {
        const drillColumn = drillEvent.drillContext.row[drillEvent.drillContext.columnIndex];
        const drillValue = !isNil(drillColumn) ? drillColumn.name : drillColumn;
        renderDrillValue = (
            <h3>
                You have Clicked <span className="s-drill-value">{drillValue}</span>
            </h3>
        );
    }

    return (
        <div>
            {renderDrillValue}
            <div style={style} className="s-pivot-table-drill">
                <PivotTable
                    measures={measures}
                    rows={attributes}
                    columns={columns}
                    pageSize={20}
                    drillableItems={drillableItems}
                    onDrill={onDrill}
                />
            </div>
            <InsightView insight={Ldm.Insights.Pivot} />

        </div>
    );
};