import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//开启gzip压缩
import viteCompression from "vite-plugin-compression";
const path = require("path");

export default defineConfig({
    resolve: {
        //路径别名
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [vue(), viteCompression()],
    // 开发或生产环境服务的公共基础路径,可以是/foo/、https://foo.com/、空字符串或./(用于开发环境) 几种类型，这个选项也可以通过命令行参数指定（例：vite build --base=/my/public/path/）
    base: './',
    // 静态资源服务的文件夹, 默认"public"
    publicDir: 'public',
    // 公共样式
    css: {
        // postcss: {
        //     plugins: [
        //         require('autoprefixer')
        //     ]
        // },
        // sass: {
        //     implementation: require('sass'), // This line must in sass option
        // },
        // 🔥此处添加全局scss🔥
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/common.scss";'
            }
        }
    },
    server: {
        // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        host: '0.0.0.0',
        // 服务器端口号
        port: 3000,
        // boolean | string 启动项目时自动在浏览器打开应用程序；如果为string，比如"/index.html"，会打开http://localhost:3000/index.html
        open: true, // 浏览器自动打开
        https: false, // 是否开启 https
        ssr: false, // 服务端渲染
        // 自定义代理规则
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        // 指定输出路径，默认'dist'
        outDir: 'dist',
        // 指定生成静态资源的存放路径(相对于build.outDir)
        assetsDir: 'assets',
        // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
        assetsInlineLimit: '4096',
        // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
        cssCodeSplit: true,
        // 构建后是否生成source map文件，默认false
        sourcemap: false,
        // 为true时，会生成manifest.json文件，用于后端集成
        manifest: false
    }
})
