/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //     serverComponentsExternalPackages: ["mongoose"],
    // },
    images: {
        domains: ['lh3.googleusercontent.com', 'image.tmdb.org'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/movies',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig;

