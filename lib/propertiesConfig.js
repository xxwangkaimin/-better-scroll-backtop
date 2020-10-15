"use strict";
exports.__esModule = true;
var sourcePrefix = 'plugins.backTop';
var propertiesMap = [
    {
        key: 'backTopHidden',
        name: 'backTopHidden'
    }
];
exports["default"] = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});
