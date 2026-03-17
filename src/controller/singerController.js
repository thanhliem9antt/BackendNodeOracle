import getConnection from "../config/db.js";

class SingerController {
    async index(req, res) {
        res.send("Singer index");
    }

    async createSinger(req, res) {
        console.log("Request body:", req.body);
        const { name, realName, birthDate, nationality, genre, description, image } = req.body;

        let conn;


    try {
      conn = await getConnection();

            await conn.execute(
                `BEGIN 
                THEM_NGHESI(
                    :name,
                    :realName,
                    TO_DATE(:birthDate,'YYYY-MM-DD'),
                    :nationality,
                    :genre,
                    :description,
                    :image
                ); 
            END;`,
                {
                    name: name,
                    realName: realName,
                    birthDate: { val: new Date(birthDate), type: oracledb.DATE }  ,
                    nationality: nationality,
                    genre: genre,
                    description: description,
                    image: image
                },
                { autoCommit: true }
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
