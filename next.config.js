/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({ dest: 'public', disable: isDev })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = withPWA(nextConfig)
