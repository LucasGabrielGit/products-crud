module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "19052001",
  database: "study_db",
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
