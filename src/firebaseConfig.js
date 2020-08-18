import firebase from '@firebase/app';
import '@firebase/storage';

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`
};

firebase.initializeApp(config);

export const storage = firebase.storage();