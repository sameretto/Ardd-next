import * as admin from 'firebase-admin';
import { ContentType } from '../constants/articles.const';

export interface ArticleData {
    image: string;
    title: string;
    description: string;
    date: admin.firestore.Timestamp;
    link: string;
    type?: string;
    topics?: string[];
}

export interface FirebaseArticle {
    description: string; // Article description
    thumbnail: string; // Thumbnail image if one exists
    title: string; // Title of article
    topics?: string[]; // Topic categories if exist
    type?: string; // Type category if exists
    author?: string; // Author if exists
    contentType: ContentType; // Type of conent
    id: string; // Document id
    uploadDate: admin.firestore.Timestamp; // Article upload date
}

export interface ArticleCollection {
    page: string;
    collection: string;
}