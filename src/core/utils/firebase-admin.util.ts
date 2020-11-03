import * as admin from 'firebase-admin';

try {
    admin.initializeApp();
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const db = admin;
export default db;