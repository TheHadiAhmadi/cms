
export default {
    input: './server.ts',
    plugins: [
        typescript(),
        resolve(),
        common(),
        json(),
    ]
}