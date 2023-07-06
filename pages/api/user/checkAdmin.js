import { getSession } from "next-auth/react";
import connect from "../../../Databases/Connect";
import userSchema from "../../../Databases/Schemas/userSchema";

export default async function handler(req, res) {
    await connect();
    var session = await getSession({ req });
    if (!!session) {
        let email = session.user.email;
        var data = await userSchema.findOne({ email: email })
        if (!!data) {
            if (data.role === "admin") {
                res.status(200).json({ isadmin: true });
            } else {
                res.status(200).json({ isadmin: false });
            }
        }
    }
}