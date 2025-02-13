import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static5.depositphotos.com",
        port: "",
        pathname: "*",
        search: "",
      },
      {
        protocol: "https",
        hostname: "static7.depositphotos.com",
        port: "",
        pathname: "*",
        search: "",
      },
      {
        protocol: "https",
        hostname: "st5.depositphotos.com",
        port: "",
        pathname: "*",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
