import React from 'react';
import Footer from './Footer';
import Header from './Header';

const firebaseConfig = {
  apiKey: 'AIzaSyBMUDD8WupWFaz3y9sT7R0IB_HyjgWzYuY',
  authDomain: 'protab-8fb31.firebaseapp.com',
  databaseURL: 'https://protab-8fb31.firebaseio.com',
  projectId: 'protab-8fb31',
  storageBucket: 'protab-8fb31.appspot.com',
  messagingSenderId: '659614032004',
  appId: '1:659614032004:web:6f686f6245abd980a8a2d1',
  measurementId: 'G-TC5D0341G6'
};

const initFirebse = async () => {
  if (location.pathname.indexOf('uninstall') === -1 || location.search.length < 2) return;
  try {
    import('firebase').then(firebase => {
      firebase.initializeApp(firebaseConfig);
      const db = firebase.database();
      const data = getData();
      db.ref()
        .child('uninstalls')
        .push(data);
    });
  } catch (e) {
    console.log(' error in analytics ', e);
  }
};

const getData = () => {
  const search = location.search;
  let [str1 = '', str2 = ''] = search.substring(1, search.length).split('&');
  const [key1, value1] = str1.split('=');
  const [key2, value2] = str2.split('=');
  const data = { timestamp: Date.now(), date: new Date().toUTCString() };
  if (key1 && value1) {
    data[key1] = value1;
  }
  if (key2 && value2) {
    data[key2] = value2;
  }
  return data;
};

const Layout = ({ children }) => {
  React.useEffect(() => {
    initFirebse();
  }, []);
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
