/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-04-14T03:13:02.224Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Campaign channel id
 * Attribute ID: qa__campaign_channels.campaign_channel_id
 */

export const CampaignChannelId = newAttribute("qa__campaign_channels.campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: qa__campaign_channels.category
 */

export const Category = newAttribute("qa__campaign_channels.category");
/**
 * Attribute Title: Type
 * Attribute ID: qa__campaign_channels.type
 */

export const Type = newAttribute("qa__campaign_channels.type");
/**
 * Attribute Title: Campaign id
 * Attribute ID: qa__campaigns.campaign_id
 */

export const CampaignId = newAttribute("qa__campaigns.campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: qa__campaigns.campaign_name
 */

export const CampaignName = newAttribute("qa__campaigns.campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: qa__customers.customer_id
 */

export const CustomerId = newAttribute("qa__customers.customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: qa__customers.customer_name
 */

export const CustomerName = newAttribute("qa__customers.customer_name");
/**
 * Attribute Title: Region
 * Attribute ID: qa__customers.region
 */

export const Region = newAttribute("qa__customers.region");
/**
 * Attribute Title: State
 * Attribute ID: qa__customers.state
 */

export const State = {
  /**
   * Display Form Title: State
   * Display Form ID: qa__customers.state
   */
  Default: newAttribute("qa__customers.state")
  /**
   * Display Form Title: Location
   * Display Form ID: qa__customers.geo__state__location
   */
  ,
  Location: newAttribute("qa__customers.geo__state__location")
};
/**
 * Attribute Title: Order id
 * Attribute ID: qa__order_lines.order_id
 */

export const OrderId = newAttribute("qa__order_lines.order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: qa__order_lines.order_line_id
 */

export const OrderLineId = newAttribute("qa__order_lines.order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: qa__order_lines.order_status
 */

export const OrderStatus = newAttribute("qa__order_lines.order_status");
/**
 * Attribute Title: Region
 * Attribute ID: qa__order_lines.region
 */

export const Region_1 = newAttribute("qa__order_lines.region");
/**
 * Attribute Title: State
 * Attribute ID: qa__order_lines.state
 */

export const State_1 = newAttribute("qa__order_lines.state");
/**
 * Attribute Title: Category
 * Attribute ID: qa__products.category
 */

export const Category_1 = newAttribute("qa__products.category");
/**
 * Attribute Title: Product id
 * Attribute ID: qa__products.product_id
 */

export const ProductId = newAttribute("qa__products.product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: qa__products.product_name
 */

export const ProductName = newAttribute("qa__products.product_name");
/**
 * Fact Title: Budget
 * Fact ID: qa__campaign_channels.budget
 */

export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: qa__campaign_channels.budget
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("qa__campaign_channels.budget", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Spend
 * Fact ID: qa__campaign_channels.spend
 */

export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: qa__campaign_channels.spend
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("qa__campaign_channels.spend", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Price
 * Fact ID: qa__order_lines.price
 */

export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: qa__order_lines.price
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("qa__order_lines.price", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Quantity
 * Fact ID: qa__order_lines.quantity
 */

export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: qa__order_lines.quantity
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("qa__order_lines.quantity", "fact"), m => m.aggregation("runsum"))
};
/**
 * Attribute Title: Date2 - Year
 * Attribute ID: date2.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2Year = newAttribute("date2.year");
/**
 * Attribute Title: Date2 - Week of Year
 * Attribute ID: date2.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2WeekOfYear = newAttribute("date2.weekOfYear");
/**
 * Attribute Title: Date2 - Week/Year
 * Attribute ID: date2.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2WeekYear = newAttribute("date2.week");
/**
 * Attribute Title: Date2 - Quarter of Year
 * Attribute ID: date2.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2QuarterOfYear = newAttribute("date2.quarterOfYear");
/**
 * Attribute Title: Date2 - Quarter/Year
 * Attribute ID: date2.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2QuarterYear = newAttribute("date2.quarter");
/**
 * Attribute Title: Date2 - Month of Year
 * Attribute ID: date2.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2MonthOfYear = newAttribute("date2.monthOfYear");
/**
 * Attribute Title: Date2 - Month/Year
 * Attribute ID: date2.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2MonthYear = newAttribute("date2.month");
/**
 * Attribute Title: Date2 - Minute of Hour
 * Attribute ID: date2.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2MinuteOfHour = newAttribute("date2.minuteOfHour");
/**
 * Attribute Title: Date2 - Minute
 * Attribute ID: date2.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2Minute = newAttribute("date2.minute");
/**
 * Attribute Title: Date2 - Hour of Day
 * Attribute ID: date2.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2HourOfDay = newAttribute("date2.hourOfDay");
/**
 * Attribute Title: Date2 - Hour
 * Attribute ID: date2.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2Hour = newAttribute("date2.hour");
/**
 * Attribute Title: Date2 - Day of Year
 * Attribute ID: date2.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2DayOfYear = newAttribute("date2.dayOfYear");
/**
 * Attribute Title: Date2 - Day of Week
 * Attribute ID: date2.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2DayOfWeek = newAttribute("date2.dayOfWeek");
/**
 * Attribute Title: Date2 - Day of Month
 * Attribute ID: date2.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2DayOfMonth = newAttribute("date2.dayOfMonth");
/**
 * Attribute Title: Date2 - Date
 * Attribute ID: date2.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date2Date = newAttribute("date2.day");
/**
 * Attribute Title: Date3 - Year
 * Attribute ID: date3.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3Year = newAttribute("date3.year");
/**
 * Attribute Title: Date3 - Week of Year
 * Attribute ID: date3.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3WeekOfYear = newAttribute("date3.weekOfYear");
/**
 * Attribute Title: Date3 - Week/Year
 * Attribute ID: date3.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3WeekYear = newAttribute("date3.week");
/**
 * Attribute Title: Date3 - Quarter of Year
 * Attribute ID: date3.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3QuarterOfYear = newAttribute("date3.quarterOfYear");
/**
 * Attribute Title: Date3 - Quarter/Year
 * Attribute ID: date3.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3QuarterYear = newAttribute("date3.quarter");
/**
 * Attribute Title: Date3 - Month of Year
 * Attribute ID: date3.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3MonthOfYear = newAttribute("date3.monthOfYear");
/**
 * Attribute Title: Date3 - Month/Year
 * Attribute ID: date3.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3MonthYear = newAttribute("date3.month");
/**
 * Attribute Title: Date3 - Minute of Hour
 * Attribute ID: date3.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3MinuteOfHour = newAttribute("date3.minuteOfHour");
/**
 * Attribute Title: Date3 - Minute
 * Attribute ID: date3.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3Minute = newAttribute("date3.minute");
/**
 * Attribute Title: Date3 - Hour of Day
 * Attribute ID: date3.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3HourOfDay = newAttribute("date3.hourOfDay");
/**
 * Attribute Title: Date3 - Hour
 * Attribute ID: date3.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3Hour = newAttribute("date3.hour");
/**
 * Attribute Title: Date3 - Day of Year
 * Attribute ID: date3.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3DayOfYear = newAttribute("date3.dayOfYear");
/**
 * Attribute Title: Date3 - Day of Week
 * Attribute ID: date3.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3DayOfWeek = newAttribute("date3.dayOfWeek");
/**
 * Attribute Title: Date3 - Day of Month
 * Attribute ID: date3.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3DayOfMonth = newAttribute("date3.dayOfMonth");
/**
 * Attribute Title: Date3 - Date
 * Attribute ID: date3.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date3Date = newAttribute("date3.day");
/**
 * Attribute Title: Date1 - Year
 * Attribute ID: date1.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1Year = newAttribute("date1.year");
/**
 * Attribute Title: Date1 - Week of Year
 * Attribute ID: date1.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1WeekOfYear = newAttribute("date1.weekOfYear");
/**
 * Attribute Title: Date1 - Week/Year
 * Attribute ID: date1.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1WeekYear = newAttribute("date1.week");
/**
 * Attribute Title: Date1 - Quarter of Year
 * Attribute ID: date1.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1QuarterOfYear = newAttribute("date1.quarterOfYear");
/**
 * Attribute Title: Date1 - Quarter/Year
 * Attribute ID: date1.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1QuarterYear = newAttribute("date1.quarter");
/**
 * Attribute Title: Date1 - Month of Year
 * Attribute ID: date1.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1MonthOfYear = newAttribute("date1.monthOfYear");
/**
 * Attribute Title: Date1 - Month/Year
 * Attribute ID: date1.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1MonthYear = newAttribute("date1.month");
/**
 * Attribute Title: Date1 - Minute of Hour
 * Attribute ID: date1.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1MinuteOfHour = newAttribute("date1.minuteOfHour");
/**
 * Attribute Title: Date1 - Minute
 * Attribute ID: date1.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1Minute = newAttribute("date1.minute");
/**
 * Attribute Title: Date1 - Hour of Day
 * Attribute ID: date1.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1HourOfDay = newAttribute("date1.hourOfDay");
/**
 * Attribute Title: Date1 - Hour
 * Attribute ID: date1.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1Hour = newAttribute("date1.hour");
/**
 * Attribute Title: Date1 - Day of Year
 * Attribute ID: date1.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1DayOfYear = newAttribute("date1.dayOfYear");
/**
 * Attribute Title: Date1 - Day of Week
 * Attribute ID: date1.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1DayOfWeek = newAttribute("date1.dayOfWeek");
/**
 * Attribute Title: Date1 - Day of Month
 * Attribute ID: date1.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1DayOfMonth = newAttribute("date1.dayOfMonth");
/**
 * Attribute Title: Date1 - Date
 * Attribute ID: date1.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const Date1Date = newAttribute("date1.day");
/**
 * Available Date Data Sets
 */

export const DateDatasets = {
  /**
   * Date Data Set Title: Date2
   * Date Data Set ID: date2
   */
  Date2: {
    ref: idRef("date2", "dataSet"),
    identifier: "date2"
    /**
     * Date Attribute: Date2 - Year
     * Date Attribute ID: date2.year
     */
    ,
    Date2Year: {
      ref: idRef("date2.year", "attribute"),
      identifier: "date2.year"
      /**
       * Display Form Title: Date2 - Year
       * Display Form ID: date2.year
       */
      ,
      Default: newAttribute("date2.year")
    }
    /**
     * Date Attribute: Date2 - Week of Year
     * Date Attribute ID: date2.weekOfYear
     */
    ,
    Date2WeekOfYear: {
      ref: idRef("date2.weekOfYear", "attribute"),
      identifier: "date2.weekOfYear"
      /**
       * Display Form Title: Date2 - Week of Year
       * Display Form ID: date2.weekOfYear
       */
      ,
      Default: newAttribute("date2.weekOfYear")
    }
    /**
     * Date Attribute: Date2 - Week/Year
     * Date Attribute ID: date2.week
     */
    ,
    Date2WeekYear: {
      ref: idRef("date2.week", "attribute"),
      identifier: "date2.week"
      /**
       * Display Form Title: Date2 - Week/Year
       * Display Form ID: date2.week
       */
      ,
      Default: newAttribute("date2.week")
    }
    /**
     * Date Attribute: Date2 - Quarter of Year
     * Date Attribute ID: date2.quarterOfYear
     */
    ,
    Date2QuarterOfYear: {
      ref: idRef("date2.quarterOfYear", "attribute"),
      identifier: "date2.quarterOfYear"
      /**
       * Display Form Title: Date2 - Quarter of Year
       * Display Form ID: date2.quarterOfYear
       */
      ,
      Default: newAttribute("date2.quarterOfYear")
    }
    /**
     * Date Attribute: Date2 - Quarter/Year
     * Date Attribute ID: date2.quarter
     */
    ,
    Date2QuarterYear: {
      ref: idRef("date2.quarter", "attribute"),
      identifier: "date2.quarter"
      /**
       * Display Form Title: Date2 - Quarter/Year
       * Display Form ID: date2.quarter
       */
      ,
      Default: newAttribute("date2.quarter")
    }
    /**
     * Date Attribute: Date2 - Month of Year
     * Date Attribute ID: date2.monthOfYear
     */
    ,
    Date2MonthOfYear: {
      ref: idRef("date2.monthOfYear", "attribute"),
      identifier: "date2.monthOfYear"
      /**
       * Display Form Title: Date2 - Month of Year
       * Display Form ID: date2.monthOfYear
       */
      ,
      Default: newAttribute("date2.monthOfYear")
    }
    /**
     * Date Attribute: Date2 - Month/Year
     * Date Attribute ID: date2.month
     */
    ,
    Date2MonthYear: {
      ref: idRef("date2.month", "attribute"),
      identifier: "date2.month"
      /**
       * Display Form Title: Date2 - Month/Year
       * Display Form ID: date2.month
       */
      ,
      Default: newAttribute("date2.month")
    }
    /**
     * Date Attribute: Date2 - Minute of Hour
     * Date Attribute ID: date2.minuteOfHour
     */
    ,
    Date2MinuteOfHour: {
      ref: idRef("date2.minuteOfHour", "attribute"),
      identifier: "date2.minuteOfHour"
      /**
       * Display Form Title: Date2 - Minute of Hour
       * Display Form ID: date2.minuteOfHour
       */
      ,
      Default: newAttribute("date2.minuteOfHour")
    }
    /**
     * Date Attribute: Date2 - Minute
     * Date Attribute ID: date2.minute
     */
    ,
    Date2Minute: {
      ref: idRef("date2.minute", "attribute"),
      identifier: "date2.minute"
      /**
       * Display Form Title: Date2 - Minute
       * Display Form ID: date2.minute
       */
      ,
      Default: newAttribute("date2.minute")
    }
    /**
     * Date Attribute: Date2 - Hour of Day
     * Date Attribute ID: date2.hourOfDay
     */
    ,
    Date2HourOfDay: {
      ref: idRef("date2.hourOfDay", "attribute"),
      identifier: "date2.hourOfDay"
      /**
       * Display Form Title: Date2 - Hour of Day
       * Display Form ID: date2.hourOfDay
       */
      ,
      Default: newAttribute("date2.hourOfDay")
    }
    /**
     * Date Attribute: Date2 - Hour
     * Date Attribute ID: date2.hour
     */
    ,
    Date2Hour: {
      ref: idRef("date2.hour", "attribute"),
      identifier: "date2.hour"
      /**
       * Display Form Title: Date2 - Hour
       * Display Form ID: date2.hour
       */
      ,
      Default: newAttribute("date2.hour")
    }
    /**
     * Date Attribute: Date2 - Day of Year
     * Date Attribute ID: date2.dayOfYear
     */
    ,
    Date2DayOfYear: {
      ref: idRef("date2.dayOfYear", "attribute"),
      identifier: "date2.dayOfYear"
      /**
       * Display Form Title: Date2 - Day of Year
       * Display Form ID: date2.dayOfYear
       */
      ,
      Default: newAttribute("date2.dayOfYear")
    }
    /**
     * Date Attribute: Date2 - Day of Week
     * Date Attribute ID: date2.dayOfWeek
     */
    ,
    Date2DayOfWeek: {
      ref: idRef("date2.dayOfWeek", "attribute"),
      identifier: "date2.dayOfWeek"
      /**
       * Display Form Title: Date2 - Day of Week
       * Display Form ID: date2.dayOfWeek
       */
      ,
      Default: newAttribute("date2.dayOfWeek")
    }
    /**
     * Date Attribute: Date2 - Day of Month
     * Date Attribute ID: date2.dayOfMonth
     */
    ,
    Date2DayOfMonth: {
      ref: idRef("date2.dayOfMonth", "attribute"),
      identifier: "date2.dayOfMonth"
      /**
       * Display Form Title: Date2 - Day of Month
       * Display Form ID: date2.dayOfMonth
       */
      ,
      Default: newAttribute("date2.dayOfMonth")
    }
    /**
     * Date Attribute: Date2 - Date
     * Date Attribute ID: date2.day
     */
    ,
    Date2Date: {
      ref: idRef("date2.day", "attribute"),
      identifier: "date2.day"
      /**
       * Display Form Title: Date2 - Date
       * Display Form ID: date2.day
       */
      ,
      Default: newAttribute("date2.day")
    }
  }
  /**
   * Date Data Set Title: Date3
   * Date Data Set ID: date3
   */
  ,
  Date3: {
    ref: idRef("date3", "dataSet"),
    identifier: "date3"
    /**
     * Date Attribute: Date3 - Year
     * Date Attribute ID: date3.year
     */
    ,
    Date3Year: {
      ref: idRef("date3.year", "attribute"),
      identifier: "date3.year"
      /**
       * Display Form Title: Date3 - Year
       * Display Form ID: date3.year
       */
      ,
      Default: newAttribute("date3.year")
    }
    /**
     * Date Attribute: Date3 - Week of Year
     * Date Attribute ID: date3.weekOfYear
     */
    ,
    Date3WeekOfYear: {
      ref: idRef("date3.weekOfYear", "attribute"),
      identifier: "date3.weekOfYear"
      /**
       * Display Form Title: Date3 - Week of Year
       * Display Form ID: date3.weekOfYear
       */
      ,
      Default: newAttribute("date3.weekOfYear")
    }
    /**
     * Date Attribute: Date3 - Week/Year
     * Date Attribute ID: date3.week
     */
    ,
    Date3WeekYear: {
      ref: idRef("date3.week", "attribute"),
      identifier: "date3.week"
      /**
       * Display Form Title: Date3 - Week/Year
       * Display Form ID: date3.week
       */
      ,
      Default: newAttribute("date3.week")
    }
    /**
     * Date Attribute: Date3 - Quarter of Year
     * Date Attribute ID: date3.quarterOfYear
     */
    ,
    Date3QuarterOfYear: {
      ref: idRef("date3.quarterOfYear", "attribute"),
      identifier: "date3.quarterOfYear"
      /**
       * Display Form Title: Date3 - Quarter of Year
       * Display Form ID: date3.quarterOfYear
       */
      ,
      Default: newAttribute("date3.quarterOfYear")
    }
    /**
     * Date Attribute: Date3 - Quarter/Year
     * Date Attribute ID: date3.quarter
     */
    ,
    Date3QuarterYear: {
      ref: idRef("date3.quarter", "attribute"),
      identifier: "date3.quarter"
      /**
       * Display Form Title: Date3 - Quarter/Year
       * Display Form ID: date3.quarter
       */
      ,
      Default: newAttribute("date3.quarter")
    }
    /**
     * Date Attribute: Date3 - Month of Year
     * Date Attribute ID: date3.monthOfYear
     */
    ,
    Date3MonthOfYear: {
      ref: idRef("date3.monthOfYear", "attribute"),
      identifier: "date3.monthOfYear"
      /**
       * Display Form Title: Date3 - Month of Year
       * Display Form ID: date3.monthOfYear
       */
      ,
      Default: newAttribute("date3.monthOfYear")
    }
    /**
     * Date Attribute: Date3 - Month/Year
     * Date Attribute ID: date3.month
     */
    ,
    Date3MonthYear: {
      ref: idRef("date3.month", "attribute"),
      identifier: "date3.month"
      /**
       * Display Form Title: Date3 - Month/Year
       * Display Form ID: date3.month
       */
      ,
      Default: newAttribute("date3.month")
    }
    /**
     * Date Attribute: Date3 - Minute of Hour
     * Date Attribute ID: date3.minuteOfHour
     */
    ,
    Date3MinuteOfHour: {
      ref: idRef("date3.minuteOfHour", "attribute"),
      identifier: "date3.minuteOfHour"
      /**
       * Display Form Title: Date3 - Minute of Hour
       * Display Form ID: date3.minuteOfHour
       */
      ,
      Default: newAttribute("date3.minuteOfHour")
    }
    /**
     * Date Attribute: Date3 - Minute
     * Date Attribute ID: date3.minute
     */
    ,
    Date3Minute: {
      ref: idRef("date3.minute", "attribute"),
      identifier: "date3.minute"
      /**
       * Display Form Title: Date3 - Minute
       * Display Form ID: date3.minute
       */
      ,
      Default: newAttribute("date3.minute")
    }
    /**
     * Date Attribute: Date3 - Hour of Day
     * Date Attribute ID: date3.hourOfDay
     */
    ,
    Date3HourOfDay: {
      ref: idRef("date3.hourOfDay", "attribute"),
      identifier: "date3.hourOfDay"
      /**
       * Display Form Title: Date3 - Hour of Day
       * Display Form ID: date3.hourOfDay
       */
      ,
      Default: newAttribute("date3.hourOfDay")
    }
    /**
     * Date Attribute: Date3 - Hour
     * Date Attribute ID: date3.hour
     */
    ,
    Date3Hour: {
      ref: idRef("date3.hour", "attribute"),
      identifier: "date3.hour"
      /**
       * Display Form Title: Date3 - Hour
       * Display Form ID: date3.hour
       */
      ,
      Default: newAttribute("date3.hour")
    }
    /**
     * Date Attribute: Date3 - Day of Year
     * Date Attribute ID: date3.dayOfYear
     */
    ,
    Date3DayOfYear: {
      ref: idRef("date3.dayOfYear", "attribute"),
      identifier: "date3.dayOfYear"
      /**
       * Display Form Title: Date3 - Day of Year
       * Display Form ID: date3.dayOfYear
       */
      ,
      Default: newAttribute("date3.dayOfYear")
    }
    /**
     * Date Attribute: Date3 - Day of Week
     * Date Attribute ID: date3.dayOfWeek
     */
    ,
    Date3DayOfWeek: {
      ref: idRef("date3.dayOfWeek", "attribute"),
      identifier: "date3.dayOfWeek"
      /**
       * Display Form Title: Date3 - Day of Week
       * Display Form ID: date3.dayOfWeek
       */
      ,
      Default: newAttribute("date3.dayOfWeek")
    }
    /**
     * Date Attribute: Date3 - Day of Month
     * Date Attribute ID: date3.dayOfMonth
     */
    ,
    Date3DayOfMonth: {
      ref: idRef("date3.dayOfMonth", "attribute"),
      identifier: "date3.dayOfMonth"
      /**
       * Display Form Title: Date3 - Day of Month
       * Display Form ID: date3.dayOfMonth
       */
      ,
      Default: newAttribute("date3.dayOfMonth")
    }
    /**
     * Date Attribute: Date3 - Date
     * Date Attribute ID: date3.day
     */
    ,
    Date3Date: {
      ref: idRef("date3.day", "attribute"),
      identifier: "date3.day"
      /**
       * Display Form Title: Date3 - Date
       * Display Form ID: date3.day
       */
      ,
      Default: newAttribute("date3.day")
    }
  }
  /**
   * Date Data Set Title: Date1
   * Date Data Set ID: date1
   */
  ,
  Date1: {
    ref: idRef("date1", "dataSet"),
    identifier: "date1"
    /**
     * Date Attribute: Date1 - Year
     * Date Attribute ID: date1.year
     */
    ,
    Date1Year: {
      ref: idRef("date1.year", "attribute"),
      identifier: "date1.year"
      /**
       * Display Form Title: Date1 - Year
       * Display Form ID: date1.year
       */
      ,
      Default: newAttribute("date1.year")
    }
    /**
     * Date Attribute: Date1 - Week of Year
     * Date Attribute ID: date1.weekOfYear
     */
    ,
    Date1WeekOfYear: {
      ref: idRef("date1.weekOfYear", "attribute"),
      identifier: "date1.weekOfYear"
      /**
       * Display Form Title: Date1 - Week of Year
       * Display Form ID: date1.weekOfYear
       */
      ,
      Default: newAttribute("date1.weekOfYear")
    }
    /**
     * Date Attribute: Date1 - Week/Year
     * Date Attribute ID: date1.week
     */
    ,
    Date1WeekYear: {
      ref: idRef("date1.week", "attribute"),
      identifier: "date1.week"
      /**
       * Display Form Title: Date1 - Week/Year
       * Display Form ID: date1.week
       */
      ,
      Default: newAttribute("date1.week")
    }
    /**
     * Date Attribute: Date1 - Quarter of Year
     * Date Attribute ID: date1.quarterOfYear
     */
    ,
    Date1QuarterOfYear: {
      ref: idRef("date1.quarterOfYear", "attribute"),
      identifier: "date1.quarterOfYear"
      /**
       * Display Form Title: Date1 - Quarter of Year
       * Display Form ID: date1.quarterOfYear
       */
      ,
      Default: newAttribute("date1.quarterOfYear")
    }
    /**
     * Date Attribute: Date1 - Quarter/Year
     * Date Attribute ID: date1.quarter
     */
    ,
    Date1QuarterYear: {
      ref: idRef("date1.quarter", "attribute"),
      identifier: "date1.quarter"
      /**
       * Display Form Title: Date1 - Quarter/Year
       * Display Form ID: date1.quarter
       */
      ,
      Default: newAttribute("date1.quarter")
    }
    /**
     * Date Attribute: Date1 - Month of Year
     * Date Attribute ID: date1.monthOfYear
     */
    ,
    Date1MonthOfYear: {
      ref: idRef("date1.monthOfYear", "attribute"),
      identifier: "date1.monthOfYear"
      /**
       * Display Form Title: Date1 - Month of Year
       * Display Form ID: date1.monthOfYear
       */
      ,
      Default: newAttribute("date1.monthOfYear")
    }
    /**
     * Date Attribute: Date1 - Month/Year
     * Date Attribute ID: date1.month
     */
    ,
    Date1MonthYear: {
      ref: idRef("date1.month", "attribute"),
      identifier: "date1.month"
      /**
       * Display Form Title: Date1 - Month/Year
       * Display Form ID: date1.month
       */
      ,
      Default: newAttribute("date1.month")
    }
    /**
     * Date Attribute: Date1 - Minute of Hour
     * Date Attribute ID: date1.minuteOfHour
     */
    ,
    Date1MinuteOfHour: {
      ref: idRef("date1.minuteOfHour", "attribute"),
      identifier: "date1.minuteOfHour"
      /**
       * Display Form Title: Date1 - Minute of Hour
       * Display Form ID: date1.minuteOfHour
       */
      ,
      Default: newAttribute("date1.minuteOfHour")
    }
    /**
     * Date Attribute: Date1 - Minute
     * Date Attribute ID: date1.minute
     */
    ,
    Date1Minute: {
      ref: idRef("date1.minute", "attribute"),
      identifier: "date1.minute"
      /**
       * Display Form Title: Date1 - Minute
       * Display Form ID: date1.minute
       */
      ,
      Default: newAttribute("date1.minute")
    }
    /**
     * Date Attribute: Date1 - Hour of Day
     * Date Attribute ID: date1.hourOfDay
     */
    ,
    Date1HourOfDay: {
      ref: idRef("date1.hourOfDay", "attribute"),
      identifier: "date1.hourOfDay"
      /**
       * Display Form Title: Date1 - Hour of Day
       * Display Form ID: date1.hourOfDay
       */
      ,
      Default: newAttribute("date1.hourOfDay")
    }
    /**
     * Date Attribute: Date1 - Hour
     * Date Attribute ID: date1.hour
     */
    ,
    Date1Hour: {
      ref: idRef("date1.hour", "attribute"),
      identifier: "date1.hour"
      /**
       * Display Form Title: Date1 - Hour
       * Display Form ID: date1.hour
       */
      ,
      Default: newAttribute("date1.hour")
    }
    /**
     * Date Attribute: Date1 - Day of Year
     * Date Attribute ID: date1.dayOfYear
     */
    ,
    Date1DayOfYear: {
      ref: idRef("date1.dayOfYear", "attribute"),
      identifier: "date1.dayOfYear"
      /**
       * Display Form Title: Date1 - Day of Year
       * Display Form ID: date1.dayOfYear
       */
      ,
      Default: newAttribute("date1.dayOfYear")
    }
    /**
     * Date Attribute: Date1 - Day of Week
     * Date Attribute ID: date1.dayOfWeek
     */
    ,
    Date1DayOfWeek: {
      ref: idRef("date1.dayOfWeek", "attribute"),
      identifier: "date1.dayOfWeek"
      /**
       * Display Form Title: Date1 - Day of Week
       * Display Form ID: date1.dayOfWeek
       */
      ,
      Default: newAttribute("date1.dayOfWeek")
    }
    /**
     * Date Attribute: Date1 - Day of Month
     * Date Attribute ID: date1.dayOfMonth
     */
    ,
    Date1DayOfMonth: {
      ref: idRef("date1.dayOfMonth", "attribute"),
      identifier: "date1.dayOfMonth"
      /**
       * Display Form Title: Date1 - Day of Month
       * Display Form ID: date1.dayOfMonth
       */
      ,
      Default: newAttribute("date1.dayOfMonth")
    }
    /**
     * Date Attribute: Date1 - Date
     * Date Attribute ID: date1.day
     */
    ,
    Date1Date: {
      ref: idRef("date1.day", "attribute"),
      identifier: "date1.day"
      /**
       * Display Form Title: Date1 - Date
       * Display Form ID: date1.day
       */
      ,
      Default: newAttribute("date1.day")
    }
  }
};
export const Insights = {
  /**
   * Insight Title: PoP
   * Insight ID: 7493f4fd-b0f7-42c5-80e1-98290311fe2d
   */
  PoP: "7493f4fd-b0f7-42c5-80e1-98290311fe2d"
  /**
   * Insight Title: Bullet
   * Insight ID: 9a671d58-391b-4bc0-ab6f-070be2f67d17
   */
  ,
  Bullet: "9a671d58-391b-4bc0-ab6f-070be2f67d17"
  /**
   * Insight Title: HeatMap
   * Insight ID: a902d5ee-63df-47ca-baed-6a663c407937
   */
  ,
  HeatMap: "a902d5ee-63df-47ca-baed-6a663c407937"
  /**
   * Insight Title: Pivot
   * Insight ID: a981c205-3198-44e5-b877-8b3e296077a1
   */
  ,
  Pivot: "a981c205-3198-44e5-b877-8b3e296077a1"
  /**
   * Insight Title: Pivot2
   * Insight ID: 2527360b-015d-4fae-bd88-d8fe606b2e12
   */
  ,
  Pivot2: "2527360b-015d-4fae-bd88-d8fe606b2e12"
  /**
   * Insight Title: 111
   * Insight ID: adf02232-9d7a-461c-8900-1331ef424121
   */
  ,
  _111: "adf02232-9d7a-461c-8900-1331ef424121"
  /**
   * Insight Title: Pie
   * Insight ID: cab7f931-ad64-4323-8bf3-0901cfe61d50
   */
  ,
  Pie: "cab7f931-ad64-4323-8bf3-0901cfe61d50"
};
export const Dashboards = {
  /**
   * Dashboard Title: Untitled
   * Dashboard ID: d9f1c429-b635-4c17-b92a-3c26bdbe6e83
   */
  Untitled: "d9f1c429-b635-4c17-b92a-3c26bdbe6e83"
};