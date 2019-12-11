module.exports = {
    // 解决 safari浏览器 热更新缓存问题 
    // preload插件删除即可
    // 参考：https://github.com/vuejs/vue-cli/issues/2509
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'development') {
            config.plugins.delete('preload')
        }
    },
    productionSourceMap: false,
};
