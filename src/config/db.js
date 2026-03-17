import oracledb from "oracledb";

export async function getConnection(){
    return await oracledb.getConnection({
        user: "c##liem",
        password: "123456",
        connectString: "localhost/orclpdb"
    });
}

export default getConnection;
