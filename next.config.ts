import type { NextConfig } from "next";
const createNextIntlPlugin = require("next-intl/plugin");
const withVideos = require("next-videos");

// Create the `next-intl` plugin
const withNextIntl = createNextIntlPlugin();

// Define your Next.js config
const nextConfig: NextConfig = {
  /* Add your custom Next.js config options here */
};

// Compose plugins together
module.exports = withVideos(withNextIntl(nextConfig));
