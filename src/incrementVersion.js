#!/usr/bin/env node

// * Increment Build Number by 1 and set to package.json

// @ts-check

const fs = require("fs");

var package_data = JSON.parse(fs.readFileSync("./package.json").toString());
const version = package_data.version;
var vers = version.split(".");

var appVersion = parseInt(vers[2]);
var newversion = vers[0] + "." + vers[1] + "." + (appVersion + 1).toString();
package_data.version = newversion;

fs.writeFileSync("./package.json", JSON.stringify(package_data, null, 2));

console.log(
  `\u001b[32m[incrementVersion.js] Build Number Incremented : ${appVersion} -> ${
    appVersion + 1
  }\n\u001b[0m`
);
