// pm2 config for serving the built site (dist/) on port 3011.
// Named .cjs because package.json has "type": "module" and pm2 needs CommonJS.
//
//   npm run build
//   pm2 start ecosystem.config.cjs
//   pm2 save
const path = require('path');

module.exports = {
  apps: [
    {
      name: 'keelframe-site',
      // "serve" is pm2's built-in static server (same as `pm2 serve`).
      script: 'serve',
      cwd: __dirname,
      env: {
        PM2_SERVE_PATH: path.join(__dirname, 'dist'),
        PM2_SERVE_PORT: 3011,
        // React Router: send unknown paths to index.html
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html',
      },
    },
  ],
};
