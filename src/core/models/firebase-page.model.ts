
import * as admin from 'firebase-admin';
import { ArticleData, FirebaseArticle } from './articles.model';

export interface FireBaseItem {
    content: {};
    lastUpdated: admin.firestore.Timestamp;
    locale: string;
    name: string;
    images: {};
    top?: ArticleData[];
    recent?: FirebaseArticle[];
}
