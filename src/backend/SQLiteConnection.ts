import sqlite3 from 'sqlite3';
import {Database, open} from 'sqlite';
import fs from 'fs';

export class SQLiteConnection {
    private static DictionaryDataBase: Database | null = null;

    /**
     * @description データベースを接続する。
     * @return {Promise<void>}
     */
    private async openDatabase(): Promise<void> {
        'use server';
        const filePath: string = './public/database/dictionary.sqlite3';

        if (!SQLiteConnection.DictionaryDataBase) {
            fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
                if (err) throw new Error('Cannot access file for reading or writing: ' + err);
            });
            SQLiteConnection.DictionaryDataBase = await open({
                filename: filePath,
                driver: sqlite3.Database,
            });
        } else {
            throw new Error('Database is already opened');
        }
    }

    /**
     * @description データベースの取得。接続がなければ接続する。
     * @return {Promise<Database>}
     */
    public async getDatabase(): Promise<Database> {
        if (!SQLiteConnection.DictionaryDataBase) {
            await this.openDatabase();
        }
        if (!SQLiteConnection.DictionaryDataBase) throw new Error('Database is not opened');
        return SQLiteConnection.DictionaryDataBase;
    }
}