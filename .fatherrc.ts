export default {
    cjs: {
        type: 'babel',
        lazy: true
    },
    target: 'node',
    extraBabelPlugins: ['add-module-exports']
};
