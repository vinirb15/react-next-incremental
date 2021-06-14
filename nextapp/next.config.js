module.exports = {
    rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*'
            },
            {
                source: '/:path*',
                destination: 'http://localhost:8080/:path*'
            },
            {
                source: '/',
                destination: 'http://localhost:8080'
            },
        ]
    }
}