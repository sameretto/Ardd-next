import { FireBaseItem } from './firebase-page.model';
import * as admin from 'firebase-admin';
import { FirebaseArticle } from './articles.model';


export interface HomePage extends FireBaseItem {
    carousel?: HomeCarouselItem[];
    videos?: VideoFirebaseItem[];
    'latest-content'?: FirebaseArticle[];
}

export interface HomeCarouselItem {
    route: string;
    text: string;
    title: string;
    image: string;
    active?: boolean;
    position: string;
}

export interface VideoFirebaseItem {
    title: string;
    date: admin.firestore.Timestamp;
    videoId: string;
}