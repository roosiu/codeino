import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firestore";

const GetFromDatabase = async (data: string) => {
  if (!data) return null;

  let newData; // Declare newData outside of the callback function

  await getDocs(collection(db, data)).then((querySnapshot) => {
    newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })); // Assign a value to newData inside the callback function
  });

  return newData;
};

export { GetFromDatabase };
