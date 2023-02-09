import { defineConfig } from 'father';

export default defineConfig({
    // more father config: https://github.com/umijs/father/blob/master/docs/config.md
    cjs: {
        input: 'src',
        output: 'lib',
        platform: 'node',
        transformer: 'babel'
    },
    extraBabelPlugins: ['add-module-exports']
});
