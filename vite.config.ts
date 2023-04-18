import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    base: './',
    publicDir: 'public',
    resolve: {
        alias: {
            'store': path.resolve(__dirname, './src/store/index.ts'),
            '@': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/components'),
            'utils': path.resolve(__dirname, './src/utils'),
        }
    },
    server: {
        host: '192.168.31.208',
        port: 12009,
        open: false,
        strictPort: false,
        https: false,
        cors: true,
        proxy: {
            // http://192.168.31.208:8082/god
            // '/foo': 'http://192.168.xxx.xxx:xxxx',
            '/god': {
                target: 'http://192.168.31.208:8082',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // '/api': {
            //     target: 'http://192.168.xxx.xxx:xxxx', //代理接口
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, '')
            // }
        }
    }
})
// npm install --save-dev sass-loader
// npm install --save-dev node-sass
// npm i @nutui/nutui