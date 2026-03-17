import getConnection from "../config/db.js";
import OracleDB from "oracledb";

class SingerController {
  async index(req, res) {
    res.send("Singer index");
  }

  async createSinger(req, res) {
    console.log("Request body:", req.body);
    const {
      name,
      realName,
      birthDate,
      nationality,
      genre,
      description,
      image,
    } = req.body;

    let conn;

    try {
      conn = await getConnection();

      await conn.execute(
        `BEGIN THEM_NGHESI(:1,:2,:3,:4,:5,:6,:7); END;`,
        [
          name,
          realName,
          new Date(birthDate),
          nationality,
          genre,
          description,
          image,
        ],
        { autoCommit: true },
      );

      res.json({ message: "Singer created" });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    } finally {
      if (conn) {
        await conn.close();
      }
    }
  }
}

export default new SingerController();
