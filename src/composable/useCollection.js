import { db } from '../main';
import { ref } from 'vue';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const error = ref(null);

const useCollection = (collectionName) => {
  error.value = null;

  const addRecord = (record) => {
    addDoc(collection(db, collectionName), record)
      .then(() => console.log('new record is created'))
      .catch((err) => (error.value = err.message));
  };

  const getRecord = (userId, isForMe) => {
    const cards = ref([]);
    getDocs(collection(db, collectionName))
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (isForMe) {
            if (doc.data().userId === userId)
              cards.value.push({ ...doc.data(), id: doc.id });
          } else {
            if (doc.data().userId !== userId)
              cards.value.push({ ...doc.data(), id: doc.id });
          }
        });
      })
      .catch((err) => (error.value = err.message));

    return cards;
  };

  const getRecordWithId = (id) => {
    const card = ref(null);
    getDocs(collection(db, collectionName))
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === id) card.value = doc.data();
        });
      })
      .catch((err) => (error.value = err.message));

    return card;
  };

  return { addRecord, getRecord, getRecordWithId, error };
};

export default useCollection;
