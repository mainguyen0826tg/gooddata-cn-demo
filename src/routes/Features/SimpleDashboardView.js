import React from "react";
import { DashboardView } from "@gooddata/sdk-ui-ext";
import { idRef } from "@gooddata/sdk-model";

const dashboardRef = idRef("d335733d-e7c9-4389-8dd4-6c35079dff2d");

export const SimpleDashboardView = () => {
    return <DashboardView dashboard={dashboardRef} isReadOnly />;
};
