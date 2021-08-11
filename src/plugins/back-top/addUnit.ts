/**
 * 判断是否是空值
 * @param val
 */
export function isDef(val: number | string | undefined): boolean {
    return val !== undefined && val !== null;
}

/**
 * 验证是否纯数字
 * @param val
 */
export function isNumberic(val: string): boolean {
    return /^\d+(\.\d+)?$/.test(val);
}

/**
 * 添加单位
 * @param value
 */
export function addUnit(value: number | string | undefined): string | undefined {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumberic(value) ? value + 'px' : value;
}
