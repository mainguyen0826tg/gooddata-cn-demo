import React from "react";

import { DashboardView, mergeFiltersWithDashboard } from "@gooddata/sdk-ui-ext";
import { idRef, newPositiveAttributeFilter} from "@gooddata/sdk-model";
import { HeaderPredicates } from "@gooddata/sdk-ui";

import { Ldm } from "../../ldm";
import { useMemo, useState } from "react";

const dashboardRef = idRef("d335733d-e7c9-4389-8dd4-6c35079dff2d");
const filters = [
    newPositiveAttributeFilter(Ldm.CampaignName, ["2017 Stim 3HU832"]),
];
// const filters = [];

export const SimpleDashboardView1 = () => {
    const [dashboard, setDashboard] = useState();

    const mergedFilters = useMemo(() => {
        return mergeFiltersWithDashboard(dashboard, filters);
    }, [dashboard]);

    return <DashboardView 
        dashboard={dashboardRef} 
        filters={filters}
        drillableItems={[HeaderPredicates.attributeItemNameMatch("2017 Stim 3HU832")]}
        onDrill={(e) => {
            // eslint-disable-next-line no-console
            console.log("Drill event in DashboardView: ", e);
        }}
        isReadOnly 
    />;
};

