import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the bundled placeholder avatar (an SVG) to pass through the image
    // optimizer. Safe here because we only serve our own local assets.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
