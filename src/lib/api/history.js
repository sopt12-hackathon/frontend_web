import client from "./client";

export const history = ({ videoId }) =>
  client.post("/user/history", { videoId });
