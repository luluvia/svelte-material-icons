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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M9 11.5C7.62 11.5 6.5 10.38 6.5 9S7.62 6.5 9 6.5 11.5 7.62 11.5 9 10.38 11.5 9 11.5M9 2C5.13 2 2 5.13 2 9C2 14.25 9 22 9 22S16 14.25 16 9C16 5.13 12.87 2 9 2M18 17L23 12L18 7V17Z" fill="${color}"/></svg>