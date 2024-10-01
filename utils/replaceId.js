export const replaceIdByArray = (array) => {
    const replaceQuery = array.map((item) => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest)

    return replaceQuery;
}


export const replaceIdByObject = (obj) => {
    const { _id, ...updatedObject } = { ...obj, id: obj._id.toString() };
    return updatedObject;
}