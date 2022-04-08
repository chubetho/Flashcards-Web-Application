import { db } from '../main';
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';

const error = ref(null);

const useCollection = (collectionName) => {
  error.value = null;
  const addRecord = async (record) => {
    try {
      await addDoc(collection(db, collectionName), record);
      console.log('record created');
    } catch (e) {
      error.value = e.message;
    }
  };

  return { addRecord, error };
};

export default useCollection;
