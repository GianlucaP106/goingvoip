/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

async function redirects() {
  return [
    {
      source: '/',
      destination: '/',
      permanent: true,
    },
  ]
}

module.exports = {
  nextConfig,
  // redirects,
}
