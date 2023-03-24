import {Sequelize} from 'sequelize';


const connect = new Sequelize("postgres://rootdnh:mypass@localhost:5432/blog");

console.log(connect)