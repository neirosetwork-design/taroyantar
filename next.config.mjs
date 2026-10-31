/** @type {import('next').NextConfig} */

// На GitHub Pages проект живёт по адресу
// https://<user>.github.io/<repo>/, поэтому сборка для Pages идёт с basePath.
// Обычная сборка (npm run dev / npm run build) остаётся без префикса.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "taroyantar";

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {
        async headers() {
          return [
            {
              // Apply to all pages in the app
              source: "/:path*",
              headers: [
                {
                  key: "Content-Security-Policy",
                  // Allow any site to embed this page in an <iframe>
                  value: "frame-ancestors *;",
                },
                // NOTE: X-Frame-Options is legacy and does not support a wildcard;
                // if your platform injects X-Frame-Options: SAMEORIGIN you may need
                // to remove/override it via platform settings.
              ],
            },
          ];
        },
        images: {
          remotePatterns: [],
        },
      }),
};

export default nextConfig;
