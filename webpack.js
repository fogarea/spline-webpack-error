const webpackNodeExternals = require('webpack-node-externals');

const getWebpackConfig = (isSSR = false) => ({
    module: {
        rules: {
            js: {
                // для исключения всех модулей в node_modules, кроме @splinetool/react-spline
                exclude: (modulePath) => /node_modules/.test(modulePath)
                    && !/node_modules\/@splinetool\/react-spline/.test(modulePath)
                    && !/node_modules\/@splinetool\/runtime/.test(modulePath),
                // && !/node_modules\/@splinetool\/runtime\/build\/runtime\.js/.test(modulePath)
                // && !/node_modules\/@splinetool\/runtime\/build\/opentype\.js/.test(modulePath)

            },
        },
    },
});

require('@steroidsjs/webpack').config({
    inlineSvg: true,
    port: process.env.APP_SSR_PORT || 9991,
    ssr: {
        externals: [
            webpackNodeExternals({
                allowlist: [/\.(?!(?:tsx?|jsx?|json)$).{1,5}$/i, /^lodash/, /^@steroidsjs/],
            }),
        ],
        module: {
            rules: {
                ts: {
                    exclude: /\.\/node_modules\/(?!steroidsjs\/core\/).*/,
                },
            },
        },
    },
    webpack: getWebpackConfig(),
});
