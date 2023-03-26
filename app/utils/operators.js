export const pipe = (...fns) => (value) => fns.reduce((previousValue, fn) => fn(previousValue),value)

export const convertToArray = (iterableItem, mapFn) => Array.from(iterableItem, iterableItem => mapFn(iterableItem))