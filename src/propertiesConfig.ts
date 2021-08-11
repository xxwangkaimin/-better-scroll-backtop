const sourcePrefix = 'plugins.backTop'

const propertiesMap = [
    {
        key: 'backTopHidden',
        name: 'backTopHidden'
    }
]

export default propertiesMap.map(item => {
    return {
        key: item.key,
        sourceKey: `${sourcePrefix}.${item.name}`
    }
})
