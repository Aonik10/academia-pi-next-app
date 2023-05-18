import { DataTypes } from "sequelize";

export function careerModel(sequelize) {
    const Career = sequelize.define(
        "Career",
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
    return Career;
}
