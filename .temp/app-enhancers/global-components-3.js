import Vue from 'vue'
Vue.component("OtherComponent", () => import("/Users/tom.bunn/Documents/repositories/act-docs/src/.vuepress/components/OtherComponent"))
Vue.component("Redirect", () => import("/Users/tom.bunn/Documents/repositories/act-docs/src/.vuepress/components/Redirect"))
Vue.component("demo-component", () => import("/Users/tom.bunn/Documents/repositories/act-docs/src/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/Users/tom.bunn/Documents/repositories/act-docs/src/.vuepress/components/Foo/Bar"))
Vue.component("CodeBlock", () => import("/Users/tom.bunn/Documents/repositories/act-docs/node_modules/@vuepress/theme-default/global-components/CodeBlock"))
Vue.component("Badge", () => import("/Users/tom.bunn/Documents/repositories/act-docs/node_modules/@vuepress/theme-default/global-components/Badge"))
Vue.component("CodeGroup", () => import("/Users/tom.bunn/Documents/repositories/act-docs/node_modules/@vuepress/theme-default/global-components/CodeGroup"))


export default {}