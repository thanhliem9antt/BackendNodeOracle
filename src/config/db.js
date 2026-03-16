import oracledb from "oracledb";

const dbConfig = {
  user: "system",
  password: "123456",
  connectString: "localhost:1521/orcl"
};

async function getConnection() {
  return await oracledb.getConnection(dbConfig);
}

export default getConnection;
