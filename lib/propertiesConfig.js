var sourcePrefix = 'plugins.backTop';
var propertiesMap = [
    {
        key: 'backTopHidden',
        name: 'backTopHidden'
    }
];
export default propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});
