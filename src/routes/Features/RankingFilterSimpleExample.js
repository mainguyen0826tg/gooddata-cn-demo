import React from "react";
import { LdmExt } from "../../ldm";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newRankingFilter } from "@gooddata/sdk-model";

const measures = [LdmExt.Price];

const attributes = [LdmExt.CampaignName];
// const columns = [LdmExt.OrderStatus];

// const columns = [LdmExt.OrderStatus];

const filters = [newRankingFilter(LdmExt.totalPriceLocalId, "TOP", 3)];

export const RankingFilterSimpleExample = () => {
    return (
        <div style={{ height: 300 }} className="s-pivot-table">
            <PivotTable 
                measures={measures} 
                rows={attributes} 
                // columns={columns}
                filters={filters} 
            />
        </div>
    );
};