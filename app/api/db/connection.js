import * as pg from "pg";
import { Sequelize } from "sequelize";

const connector = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_SERV,
        dialect: "postgres",
        dialectModule: pg,
    }
);

export default connector;
