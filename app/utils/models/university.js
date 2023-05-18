import { DataTypes } from "sequelize";

export function universityModel(sequelize) {
    const University = sequelize.define(
        "University",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
    return University;
}
