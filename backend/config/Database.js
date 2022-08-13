import { Sequelize } from "sequelize";

const db = new Sequelize("almuhsinin", "root", "", {
  host: 'localhost',
  dialect: "mysql"
});

export default db;