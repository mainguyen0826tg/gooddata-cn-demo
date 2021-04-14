#!/usr/bin/env node

require("@babel/register")({
    presets: ["@babel/preset-typescript", "@babel/preset-env"],
    plugins: ["add-module-exports"],
    extensions: [".ts", ".js"],
});

const { workspace, backend } = require("../src/constants");
const path = "./src/ldm/full.js";
process.argv.push("workspaceId", workspace, "--hostname", backend, "--output", path);
require("../node_modules/@gooddata/catalog-export");
