import getConnection from "../config/db.js";

class AccountControler {
    async index(req, res) {
        res.send("Account index");
    }

    //Create account
    async createAccount(req, res) {
        const { name, email, password } = req.body;

        try {
            const conn = await getConnection();

            await conn.execute(
                `BEGIN CREATE_ACCOUNT(:1,:2,:3); END;`,
                [name, email, password],
                { autoCommit: true },
            );

            await conn.close();


            res.json({ message: "Account created" });
        } catch (err) {
            res.status(500).json(err);
        }
    };

    //Login
    async login(req, res) {
        const { email, password } = req.body;
    };

}

export default new AccountControler();