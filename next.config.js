/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
        
    },
    experimental: {
            serverComponentsExternalPackages:['cloudinary', 'graphql-request']
        },
        eslint: {
            // caution: this allows production build to successfully complete even i the project has ESLint errors.
            ignoreDuringBuilds:true
        }
}

module.exports = nextConfig
