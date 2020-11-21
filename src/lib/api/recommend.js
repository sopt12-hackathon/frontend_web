import client from "./client";

export const recommend = ({ time }) =>
  client.post("/recommend", {time});
