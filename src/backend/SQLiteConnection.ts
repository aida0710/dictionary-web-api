import sqlite3 from 'sqlite3';
import {Database, open} from 'sqlite';

export class SQLiteConnection {
    private static DictionaryDataBase: Database | null = null;

    /**
     * @description データベースを接続する。
     * @return {Promise<void>}
     */
    private async openDatabase(): Promise<void> {
        'use server';
        const filePath: string = 'src/backend/database/dictionary.sqlite3';

        if (!SQLiteConnection.DictionaryDataBase) {
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