module.exports = ({config, mode}) => {
    config.module.rules.push(
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@emotion/babel-preset-css-prop",
                ],
                plugins: [
                    "@babel/plugin-proposal-object-rest-spread",
                    ["@babel/plugin-transform-runtime", {"regenerator": true}]
                ],
            },
        },
    )

    return config
}