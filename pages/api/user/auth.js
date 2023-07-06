import { getSession } from "next-auth/react";
import connect from "../../../Databases/Connect";
import userSchema from "../../../Databases/Schemas/userSchema";

export default async function handler(req, res) {
    await connect();
    var session = await getSession({ req });
    if (!!session) {
        let email = session.user.email;
        // check email in database
        var data = await userSchema.findOne({ email: email })
        if (!!data) {
            res.status(200).json({ data: data });
        } else {
            const name = session.user.name;
            const image = session.user.image;
            const role = "user";
            const newUser = new userSchema({ name, email, image, role });
            await newUser.save();
            res.status(200).json({ data: newUser });
        }
    } else {
        res.status(200).json({ data: null });
    }


}