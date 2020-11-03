// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: process.env.DB_URL,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DB_URL,
//     projectId: "ardd-94d08",
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };
// try {
//     firebase.initializeApp(firebaseConfig);
// } catch (err) {
//     if (!/already exists/.test(err.message)) {
//         console.error('Firebase initialization error', err.stack)
//     }
// }
// const fireDB = firebase;
// export default fireDB;