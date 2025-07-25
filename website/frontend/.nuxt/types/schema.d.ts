import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     */
    ["bootstrapVueNext"]: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-feather-icons`
     */
    ["nuxtFeatherIcons"]: typeof import("nuxt-feather-icons").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     */
    ["vue3-carousel-nuxt"]: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     */
    ["strapi"]: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     */
    ["bootstrapVueNext"]?: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-feather-icons`
     */
    ["nuxtFeatherIcons"]?: typeof import("nuxt-feather-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     */
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     */
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@bootstrap-vue-next/nuxt", Exclude<NuxtConfig["bootstrapVueNext"], boolean>] | ["nuxt-feather-icons", Exclude<NuxtConfig["nuxtFeatherIcons"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     * @see https://www.npmjs.com/package/@bootstrap-vue-next/nuxt
     */
    ["bootstrapVueNext"]: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-feather-icons`
     * @see https://www.npmjs.com/package/nuxt-feather-icons
     */
    ["nuxtFeatherIcons"]: typeof import("nuxt-feather-icons").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     * @see https://www.npmjs.com/package/vue3-carousel-nuxt
     */
    ["vue3-carousel-nuxt"]: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     * @see https://www.npmjs.com/package/@nuxtjs/strapi
     */
    ["strapi"]: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     * @see https://www.npmjs.com/package/@bootstrap-vue-next/nuxt
     */
    ["bootstrapVueNext"]?: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-feather-icons`
     * @see https://www.npmjs.com/package/nuxt-feather-icons
     */
    ["nuxtFeatherIcons"]?: typeof import("nuxt-feather-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `vue3-carousel-nuxt`
     * @see https://www.npmjs.com/package/vue3-carousel-nuxt
     */
    ["vue3-carousel-nuxt"]?: typeof import("vue3-carousel-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/strapi`
     * @see https://www.npmjs.com/package/@nuxtjs/strapi
     */
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@bootstrap-vue-next/nuxt", Exclude<NuxtConfig["bootstrapVueNext"], boolean>] | ["nuxt-feather-icons", Exclude<NuxtConfig["nuxtFeatherIcons"], boolean>] | ["vue3-carousel-nuxt", Exclude<NuxtConfig["vue3-carousel-nuxt"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/strapi", Exclude<NuxtConfig["strapi"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   strapi: {
      url: string,

      prefix: string,

      admin: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },
  }
  interface PublicRuntimeConfig {
   bootstrapVueNext: {
      directives: Array<string>,
   },

   strapi: {
      url: string,

      prefix: string,

      admin: string,

      version: string,

      cookie: any,

      auth: any,

      cookieName: string,

      devtools: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }