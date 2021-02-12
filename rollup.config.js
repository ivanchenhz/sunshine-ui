import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import url from '@rollup/plugin-url'

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase())

export default {
    input: 'src/index.js',
    output: [
        {file: pkg.module, 'format': 'es'},
        {file: pkg.main, 'format': 'umd', name}
    ],
    plugins: [
        url({
            fileName: '[name][extname]',
        }),
        svelte(),
        resolve(),
        postcss({
            config: {
                path: './postcss.config.js',
            },
            extensions: ['.css'],
            minimize: true,
            extract: true,
        }),
    ]
}
