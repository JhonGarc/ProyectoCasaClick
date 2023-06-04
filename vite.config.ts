import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import eslintPlugin from 'vite-plugin-eslint'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts({
      defaultLayout: 'index',
    }),
    eslintPlugin(),
    Components({
      /**
       * The icons resolver finds icons components from 'unplugin-icons' using this convenction:
       * {prefix}-{collection}-{icon} e.g. <i-mdi-thumb-up />
       */
      resolvers: [IconsResolver()],
    }),
    /**
     * This plugin allows to use all icons from Iconify as vue components
     * See: https://github.com/antfu/unplugin-icons
     */
    Icons({
      // This setting will autoinstall the iconify iconset when it's used in the code, e.g, @iconify-json/mdi or @iconify-json/fe
      autoInstall: true,
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
})
