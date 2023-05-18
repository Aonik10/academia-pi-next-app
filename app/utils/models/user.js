import { DataTypes } from "sequelize";
import { hashSync } from "bcryptjs";

export function userModel(sequelize) {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                set(value) {
                    this.setDataValue("password", hashSync(value));
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            university_id: {
                type: DataTypes.INTEGER,
            },
            career_id: {
                type: DataTypes.INTEGER,
            },
            incription_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: true,
        }
    );
    return User;
}
