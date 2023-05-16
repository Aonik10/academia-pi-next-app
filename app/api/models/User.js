import { DataTypes } from "sequelize";
import connector from "../db/connection";

const User = connector.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

export default User;
