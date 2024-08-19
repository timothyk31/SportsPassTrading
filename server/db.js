import mysql from 'mysql2/promise';
import {Connector} from '@google-cloud/cloud-sql-connector';

const connector = new Connector();
const clientOpts = await connector.getOptions({
  instanceConnectionName: 'my-project:region:my-instance',
  ipType: 'PUBLIC',
});
const pool = await mysql.createPool({
  ...clientOpts,
  user: 'my-user',
  password: 'my-password',
  database: 'db-name',
});
const conn = await pool.getConnection();
const [result] = await conn.query(`SELECT NOW();`);
console.table(result); // prints returned time value from server

await pool.end();
connector.close();