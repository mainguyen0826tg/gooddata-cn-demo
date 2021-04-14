import React, { useState } from "react";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { attributeIdentifier, measureIdentifier } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../ldm";
import { InsightView } from "@gooddata/sdk-ui-ext";

const measures = [LdmExt.BudgetSum, LdmExt.BudgetAvg, Ldm.Spend.Avg, Ldm.Spend.Sum];
const attributes = [LdmExt.Category, LdmExt.Type];
const columns = [LdmExt.CampaignName];

const drillableItems = [
    HeaderPredicates.identifierMatch(attributeIdentifier(LdmExt.Type)),
    HeaderPredicates.identifierMatch(measureIdentifier(LdmExt.BudgetSum)),
];

export const Drillingdancing = () => {
    return (

            <div style={{ height: 400 }}>
                <PivotTable
                    measures={measures}
                    rows={attributes}
                    columns={columns}
                    drillableItems={drillableItems}
                    onDrill={e => {
                        console.log("DRILL", e);
                    }}
                />
            </div>

    );
};

