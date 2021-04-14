import {
    modifyMeasure,
    newArithmeticMeasure,
    newMeasure,
    modifySimpleMeasure,
    modifyAttribute,
    newAttribute,
} from "@gooddata/sdk-model";
// import { workspace } from "../constants/fixtures";

import * as Ldm from "./full";


export const TypeLocalId = "type";
export const OLocalId = "OrderS";
export const CategoryLocalId = "catogory";
export const CampaignNameLocal = "CampaignNameLocalId";
export const prodNameLocalId = "prodNameLocalId";



export const BudgetLocalId = "sum";
export const BudgetAvgLocalId = "avg";
export const SLocalId = "ssum";
export const SAvgLocalId = "savg";
export const totalPriceLocalId = "totalPrice";
export const totalQLocalId = "totalQ";
export const Priceratio = "Priceratio";





//====
export const Type = modifyAttribute(Ldm.Type, (a) => a.localId(TypeLocalId));
export const Category = modifyAttribute(Ldm.Category, (a) => a.localId(CategoryLocalId));
export const CampaignName = modifyAttribute(Ldm.CampaignName, (a) => a.localId(CampaignNameLocal));
export const CampaignName1 = modifyAttribute(Ldm.CampaignName, (a) => a.localId("1"));

export const ProdName = modifyAttribute(Ldm.ProductName, (a) => a.localId(prodNameLocalId));

export const OrderStatus = modifyAttribute(Ldm.OrderStatus, (a) => a.localId(OLocalId));





//===Measure
export const BudgetSum = modifyMeasure(Ldm.Budget.Sum, (m) =>
    m.format("#,##0").localId(BudgetLocalId).title("Sum Budget"),
);
export const BudgetAvg = modifyMeasure(Ldm.Budget.Avg, (m) =>
    m.format("#,##0").localId(BudgetAvgLocalId).title("Avg Budget"),
);
export const SpendSum = modifyMeasure(Ldm.Spend.Sum, (m) =>
    m.format("#,##0").localId(BudgetLocalId).title("Sum Spend"),
);
export const SpendAvg = modifyMeasure(Ldm.Spend.Avg, (m) =>
    m.format("#,##0").localId(BudgetLocalId).title("Avg Spend"),
);
export const Price = modifyMeasure(Ldm.Price.Sum, (m) =>
    m.format("#,##0").title("Total Price").localId(totalPriceLocalId),
);
export const Quanlity = modifyMeasure(Ldm.Quantity.Sum, (m) =>
    m.format("#,##0").alias("Quan").title("Total Quan").localId(totalQLocalId),
);

export const PriceratioWithRatio = modifySimpleMeasure(Price, (m) =>
    m
        .format("#,##0.00%")
        .localId(totalPriceLocalId)
        .title("Priceratio shown in %")
        .ratio()
);