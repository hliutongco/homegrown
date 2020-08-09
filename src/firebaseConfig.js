import firebase from '@firebase/app';
import '@firebase/storage';

const config = {
  apiKey: "AIzaSyC0OQ34tXnIuzKVE0gugPPGvF43wyELlhE",
  projectId: "homegrown-tale",
  storageBucket: "homegrown-tale.appspot.com"
};

firebase.initializeApp(config);

export const storage = firebase.storage();