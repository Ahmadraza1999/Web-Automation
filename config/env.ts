import dotenv from "dotenv";

dotenv.config({
    path: `config/${process.env.ENV || "qa"}.env`
});

export const env = {
    baseUrl: process.env.BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!
};