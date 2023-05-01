import connection from '../connection.js';
import { DataTypes } from 'sequelize';

export const UserSchema = connection.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

UserSchema.sync()


