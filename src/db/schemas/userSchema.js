import connection from '../connection';
import { DataTypes } from 'sequelize';

export const UserSchema = connection.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    prmaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

