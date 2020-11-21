import client from "./client";

export const chart = () => client.get("/user/profile");
