<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let title = undefined;
  export let desc = undefined;
  export let ariaHidden = false;
</script>

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20 16L14.5 21.5L13.08 20.09L16.17 17H10.5C6.91 17 4 14.09 4 10.5V4H6V10.5C6 13 8 15 10.5 15H16.17L13.09 11.91L14.5 10.5L20 16Z" fill="${color}"/></svg>