const {DataTypes, Sequelize} = require('sequelize');
import sequelize from "../../../database.config";
import {injectable} from "inversify";

@injectable()
class TestingEntity extends Sequelize.Model {
    public id!: number;
    public address!: string;
    public user_id!: string;
}

TestingEntity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"
        }
    }, {
        sequelize,
        modelName: "Testing",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)

export default TestingEntity;