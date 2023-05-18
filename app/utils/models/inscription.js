import { DataTypes } from "sequelize";

export function inscriptionModel(sequelize) {
    const Inscription = sequelize.define(
        "Inscription",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            course_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
    return Inscription;
}
