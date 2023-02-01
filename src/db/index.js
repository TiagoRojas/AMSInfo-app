import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('appConfig.db');

export const init = () => {
    const promise = new Promise((res, rej) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS appConfig (language TEXT NOT NULL UNIQUE, theme TEXT NOT NULL UNIQUE)',
                [],
                () => res(),
                (_, err) => rej(err)
            );
        });
    });
    return promise;
};
export const createData = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE UNIQUE INDEX test ON appConfig(language)',
                [],
                (_, res) => resolve(res),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};
export const replaceData = ({ language, theme }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'REPLACE INTO appConfig (language, theme) VALUES (?, ?)',
                [language, theme],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};

export const fetchDataBase = async () => {
    const promise = new Promise((res, rej) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM appConfig',
                [],
                (_, result) => res(result),
                (_, err) => rej(err)
            );
        });
    });
    const data = await promise.then((res) => res.rows._array[0]);
    return data;
};
