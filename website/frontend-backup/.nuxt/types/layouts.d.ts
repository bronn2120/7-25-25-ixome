import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "footer" | "header" | "header-five" | "header-four" | "header-three" | "header-two" | "pre-loader" | "default"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}