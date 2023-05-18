import * as pg from "pg";
import { Sequelize } from "sequelize";
import { userModel } from "./models/user";
import { courseModel } from "./models/course";
import { inscriptionModel } from "./models/inscription";
import { universityModel } from "./models/university";
import { careerModel } from "./models/career";

export const db = {
    isConnected: false,
    connect,
};

async function connect() {
    if (db.isConnected) {
        console.log("DB is already connected");
        return;
    }

    // decostruimos los secrets necesarios del env
    const { DB_NAME, DB_USER, DB_PASS, DB_SERV } = process.env; // suponemos que esto funciona

    // establece conexion con la base de datos
    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
        host: DB_SERV,
        dialect: "postgres",
        logging: false,
        dialectModule: pg,
    });

    // inicializa los modelos y los agrega al objeto db
    db.User = userModel(sequelize);
    db.Course = courseModel(sequelize);
    db.Inscription = inscriptionModel(sequelize);
    db.University = universityModel(sequelize);
    db.Career = careerModel(sequelize);

    // sincroniza los modelos con la base de datos
    await sequelize.sync({ alter: true });
    db.isConnected = true;
    console.log("DB Initialized");
}
