module.exports = {
    plugins: [
        require('autoprefixer')({}),
        // require('postcss-plugin-px2rem')({
        //     rootValue: 750,
        //     unitPrecision: 5,
        //     propWhiteList: [],
        //     propBlackList: [],
        //     exclude:false,
        //     selectorBlackList: [],
        //     ignoreIdentifier: false,
        //     replace: true,
        //     mediaQuery: false,
        //     minPixelValue: 0
        // }),
        require('postcss-px2vw')({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            keepComment: 'no'
        }),
        
    ]
};