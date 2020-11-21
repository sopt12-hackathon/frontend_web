import client from "./client";

export const like = ({ videoId, isLike }) =>
  client.post("/like", { videoId, isLike });
