import {Preferences} from "@capacitor/preferences";
import profileProps from "../interfaces/profileProps";

/**
 * Sets the value of a data item in local storage.
 *
 * @param {string} name - The name of the data item.
 * @param {string | any} value - The value to be stored.
 * @return {void} This function does not return anything.
 */
const setData = (name: string, value: string | any): void => {
  Preferences.set({key: name, value: value}).then(() => console.log('Data set'));
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

/**
 *  Retrieves all data from local storage.
 *  @return An object of all data.
 */
const getAllData = async () => {
  let allData: profileProps= {name: "", activeCourse: "", activeSteps: 0, energy: 0, points: 0};
  for (const key of Object.keys(allData)) {
    // const index = Object.keys(allData2).indexOf(key);
    await getData(key).then((r) => {
      allData = {...allData, [key]: r.value};
    })
  }
 return allData
};


export { setData, getData, getAllData };

