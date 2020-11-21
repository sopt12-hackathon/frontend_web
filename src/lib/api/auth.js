import client from "./client";

export const login = ({ email, password }) =>
    client.post("/user/signin", { email, password });

export const register = async({ username, password }) =>
    await client.post("/api/auth/register", { username, password });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
