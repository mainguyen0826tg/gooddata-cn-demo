import React from "react";

import { DashboardView, mergeFiltersWithDashboard } from "@gooddata/sdk-ui-ext";
import { idRef, newAbsoluteDateFilter, newRelativeDateFilter} from "@gooddata/sdk-model";
import { HeaderPredicates } from "@gooddata/sdk-ui";

import { Ldm } from "../../ldm";
import { useMemo, useState } from "react";
// import { DateFilterHelpers, defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";

const dashboardRef = idRef("d9f1c429-b635-4c17-b92a-3c26bdbe6e83");
// const filters = [
//     newPositiveAttributeFilter(Ldm.CampaignName, ["2017 Stim 3HU832"]),
// ];

// const dateFilter = newRelativeDateFilter(Ldm.DateDatasets.Date1.ref, "GDC.time.month", -11, 0);
const dateFilter = newAbsoluteDateFilter(Ldm.DateDatasets.Date1.ref, "2018-01-03", "2021-01-03");



export const SimpleDashboardView2 = () => {
    const [dashboard, setDashboard] = useState();

    // const mergedFilters = useMemo(() => {
    //     return mergeFiltersWithDashboard(dashboard, dateFilter);
    // }, [dashboard]);

    return <DashboardView 
        dashboard={dashboardRef} 
        filters={[dateFilter]}
        drillableItems={[HeaderPredicates.attributeItemNameMatch("2017 Stim 3HU832")]}
        onDrill={(e) => {
            // eslint-disable-next-line no-console
            console.log("Drill event in DashboardView: ", e);
        }}
        isReadOnly 
    />;
};

