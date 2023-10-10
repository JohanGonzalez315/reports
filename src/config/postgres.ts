import { Client } from "pg";
import Pool from "pg-pool";
require('dontenv').config()

const config: Pool.Config<Client> = {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    max: 5
}

export const pool = new Pool(config)