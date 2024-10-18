export const refineItems = (item) => {
    const decodeCategory = decodeURI(item);
    if (decodeCategory === 'undefined') {
        return "";
    }
    return decodeCategory;
}