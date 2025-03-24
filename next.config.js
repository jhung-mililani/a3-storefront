/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // 🔥 Cloudinary
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // 🔥 ImgBB
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // 🔥 Firebase Storage
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // 🔥 Google Drive (posible en algunos casos)
      },
    ],
  },
};

export default config;
