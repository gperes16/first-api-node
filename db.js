import 'dotenv/config';
import postgres from 'postgres';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgresql://nodedb_owner:OaYE8TVy0Fxq@ep-falling-cake-a5qbil38.us-east-2.aws.neon.tech/nodedb?sslmode=require`
export const sql = postgres(URL, { ssl: 'require' });