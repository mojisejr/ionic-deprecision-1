export const createArrayFromSplittedString = (str: String) => {
  if (!str) {
    return null;
  }
  const createdArray = str.split(",");
  return createdArray;
};

export const sizeTranformation = (size) => {
  return `${size[0]} x ${size[1]} x ${size[2]} mm`;
};

export const findIndexFromObjectId = (array: Array<any>, id: String) => {
  return array.findIndex((element) => element._id == id);
};
