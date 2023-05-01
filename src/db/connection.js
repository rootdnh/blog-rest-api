import {Sequelize} from 'sequelize';


const connect = new Sequelize("postgres://rootdnh:mypass@localhost:5432/blog");

try {
  await connect.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default connect;