/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
}

module.exports = nextConfig


// ```

// ---

// ### Step 7: Create `.gitignore`
// **Location**: `nexus-techfest/.gitignore`
// ```
// # Dependencies
// /node_modules
// /.pnp
// .pnp.js

// # Testing
// /coverage

// # Next.js
// /.next/
// /out/

// # Production
// /build

// # Misc
// .DS_Store
// *.pem

// # Debug
// npm-debug.log*
// yarn-debug.log*
// yarn-error.log*

// # Local env files
// .env*.local

// # Vercel
// .vercel

// # TypeScript
// *.tsbuildinfo
// next-env.d.ts 