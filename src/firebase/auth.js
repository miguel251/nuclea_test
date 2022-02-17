import config from '../config';

export const firebaseConfig = {
    apiKey: config.apikey,
    authDomain: config.authdomain,
    projectId: config.projectid,
    storageBucket: config.storagebucket,
    messagingSenderId: config.messagingsenderid,
    appId: config.appid,
    measurementId: config.measurementid
}