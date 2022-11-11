import { SvelteComponentTyped } from "svelte";

export default class Icon extends SvelteComponentTyped<{
  size?: string | number
  width?: string | number
  height?: string | number
  class?: string
  color?: string
  viewBox?: string
  title?: string
  desc?: string
  ariaHidden?: boolean
}> {}