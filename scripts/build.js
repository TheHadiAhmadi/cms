// console.log('dirname', import.meta.url, process.cwd())
// // build frontend and backend...

process.chdir('./api')

import {rollup} from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import common from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { mkdirSync, renameSync } from 'fs';
import { existsSync } from 'fs';


const output = rollup({
    input: './src/server.ts',
    // external: ['polka', 'cors'],
    plugins: [
        typescript(),
        resolve(),
        common(),
        json(),
    ]
})


output.then(value => {
    value.write({
        // format: 'commonjs',
        file: './server.js'
    }).then((res => {
        process.chdir('..')

        if(!existsSync('./build')) {
            mkdirSync('./build')
        }
        renameSync('./api/server.js', './build/server.js')
    }))
})

