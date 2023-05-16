import * as pg from "pg";
import { Sequelize } from "sequelize";
import { DB_USER, DB_PASS, DB_SERV, DB_NAME } from "../secrets";

const connector = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_SERV,
    dialect: "postgres",
    dialectModule: pg,
});

export default connector;
