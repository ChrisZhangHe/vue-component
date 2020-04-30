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
 export default{ _DeepClone };
