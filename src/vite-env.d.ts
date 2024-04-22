/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module '*.md' {
    import type { ComponentOptions } from 'vue'
    const Component: ComponentOptions
    export default Component
}
declare module '*.svg' {
    const src: string
  export default src
}
declare module '*.json' {
    const src: string
  export default src
}
declare module '*.ts' {
    const src: string
    export default src
}
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}