import getConnection from "../config/db.js";
class SingerController {

    async index(req, res) {
        res.send("Singer index");
    }

    async createSinger(req, res) {

        const { name, realName, birthDate, nationality, genre, description, image } = req.body;

        let conn;

        try {

            conn = await getConnection();

            await conn.execute(
                `BEGIN 
                    THEM_NGHESI(:1,:2,:3,:4,:5,:6,:7); 
                END;`,
                [
                    name,
                    realName,
                    new Date(birthDate), // convert sang Date
                    nationality,
                    genre,
                    description,
                    image
                ],
                { autoCommit: true }
            );

            res.json({ message: "Singer created successfully" });

        } catch (err) {

            console.error("Error:", err);
            res.status(500).json({ error: err.message });

        } finally {

            if (conn) {
                try {
                    await conn.close();
                } catch (err) {
                    console.error("Close error:", err);
                }
            }

        }
    }

}

export default new SingerController();