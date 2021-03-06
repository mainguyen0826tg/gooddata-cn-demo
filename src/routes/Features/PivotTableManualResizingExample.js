import React, { Component } from "react";
import {
    PivotTable,
    newWidthForAttributeColumn,
    newWidthForSelectedColumns,
    newAttributeColumnLocator,
} from "@gooddata/sdk-ui-pivot";
import { Ldm, LdmExt } from "../../ldm";
// import { workspace } from "../../constants/fixtures";

const measures = [LdmExt.Price];

const attributes = [LdmExt.OrderStatus];

const columns = [Ldm.DateDatasets.Date1.Date1QuarterYear.Default];

const attributeWidth = (width) => newWidthForAttributeColumn(attributes[0], width);

const measureWidth = (width) =>
    newWidthForSelectedColumns(
        LdmExt.Price,
        [newAttributeColumnLocator(Ldm.DateDatasets.Date1.Date1QuarterYear.Default)],
        width,
    );

export class PivotTableManualResizingExample extends Component {
    state = {
        columnWidths: [measureWidth(200), attributeWidth(200)],
    };

    onButtonClick = (columnWidthItem) => {
        this.setState({
            columnWidths: [columnWidthItem],
        });
    };

    onColumnResized = (columnWidths) => {
        this.setState({ columnWidths });
    };

    render() {
        return (
            <div>
                <div>
                    <button
                        className="gd-button gd-button-secondary gd-button gd-button-secondary s-change-width-button-attribute"
                        onClick={() => this.onButtonClick(attributeWidth(400))}
                    >
                        Change Location State column width to 400
                    </button>
                    <button
                        className="gd-button gd-button-secondary gd-button gd-button-secondary s-change-width-button-measure"
                        onClick={() => this.onButtonClick(measureWidth(60))}
                    >
                        Change Q1 column width to 60
                    </button>
                    <button
                        className="gd-button gd-button-secondary gd-button gd-button-secondary s-change-width-button-remove"
                        onClick={() => this.setState({ columnWidths: [] })}
                    >
                        Remove column widths
                    </button>
                </div>
                <div
                    style={{ height: 300, marginTop: 20, resize: "both", overflow: "auto" }}
                    className="s-pivot-table-manual-resizing"
                >
                    <PivotTable
                        measures={measures}
                        rows={attributes}
                        columns={columns}
                        config={{
                            columnSizing: {
                                columnWidths: [...this.state.columnWidths],
                            },

                            menu: {
                                aggregations: true,
                                aggregationsSubMenu: true,
                            },
                        }}
                        pageSize={20}
                        onColumnResized={this.onColumnResized}
                    />
                </div>
            </div>
        );
    }
}

export default PivotTableManualResizingExample;