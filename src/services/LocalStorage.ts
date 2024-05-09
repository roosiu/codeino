import {Preferences} from "@capacitor/preferences";

/**
 * Sets the value of a data item in local storage.
 *
 * @param {string} name - The name of the data item.
 * @param {string | any} value - The value to be stored.
 * @return {void} This function does not return anything.
 */
const setData = (name: string, value: string | any) => {
  Preferences.set({ key: name, value: value });
};

/**
 * Retrieves data based on the provided name.
 *
 * @param {string} name - The key to retrieve data.
 * @return {Promise<any>} The retrieved value.
 */
const getData = async (name: string): Promise<any> => {
  return await Preferences.get({key: name});
};


const getAllData = async () => {
  //TODO get all data from local storage
};


export { setData, getData, getAllData };

