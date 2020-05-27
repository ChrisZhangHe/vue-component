import { JSXAttribute } from "@/utils/config.js";
let _DeepClone = function(data) {
  if (typeof data === "object") {
    let copyData = Array.isArray(data) ? [] : {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        copyData[key] =
          typeof data[key] === "object" ? _DeepClone(data[key]) : data[key];
      }
    }
    return copyData;
  } else {
    return data;
  }
};

let _DeepMergeObj = function(target, source) {
  for (let key in source) {
    if (
      (source.hasOwnProperty(key) && typeof target[key] !== "object") ||
      (source.hasOwnProperty(key) &&
        typeof target[key] === "object" &&
        JSXAttribute[key] === undefined)
    ) {
      target[key] = source[key];
    } else if (
      source.hasOwnProperty(key) &&
      typeof target[key] === "object" &&
      JSXAttribute[key] !== undefined
    ) {
      target[key] = _DeepMergeObj(target[key] || {}, source[key]);
    }
  }
  return target;
};
export { _DeepClone, _DeepMergeObj };
