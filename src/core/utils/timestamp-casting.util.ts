
import * as admin from 'firebase-admin';

export type ClientInterface<T extends object> = {
    [K in keyof T]:
    T[K] extends admin.firestore.Timestamp ? number
    : T[K] extends object ? ClientInterface<T[K]>
    : T[K] extends Array<object> ? Array<ClientInterface<T[K]>>
    : T[K]
};

// function isTimeStamp(val: any): val is admin.firestore.Timestamp {
//     if(typeof val !== 'object') {
//         return false;
//     }
//     if(val?.toMillis && typeof val.toMillis === 'function') {
//         return true;
//     } else {
//         return false;
//     }
// }

export default function timeStampCasting<T extends object>(data: T): ClientInterface<T> | null {
    if (!data) {
        return null;
    }
    const transformedData: any = {};
    for (const [key, value] of Object.entries(data)) {
        if (value instanceof admin.firestore.Timestamp) {
            transformedData[key] = value.toMillis();
        } else if (Array.isArray(value)) {
            transformedData[key] = value.map(val => {
                if (typeof val === 'object') {
                    return timeStampCasting(val);
                } else {
                    return val;
                }
            })
        } else if (typeof value === 'object') {
            transformedData[key] = timeStampCasting(value);
        } else {
            transformedData[key] = value;
        }
    }
    return transformedData;
}