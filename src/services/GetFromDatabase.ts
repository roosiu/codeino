import { getDocs, collection } from "firebase/firestore";
import { db } from "./firestore";


/**
 * Retrieves data from the database based on the provided collection name.
 *
 * @param {string} data - The name of the collection to retrieve data from.
 * @return {Promise<any[] | null>} A promise that resolves to an array of objects representing the retrieved data, or null if no data is found.
 */
const GetFromDatabase = async (data: string): Promise<any[] | null> => {
  if (!data) return null;
  let newData: any[] = []; // Declare newData outside the callback function
  await getDocs(collection(db, data)).then((querySnapshot) => {
    newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })); // Assign a value to newData inside the callback function
  });

  return newData;
};

export { GetFromDatabase };
