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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M10 2H4C2.9 2 2 2.9 2 4S2.9 6 4 6H8L10 2M18 2C20.2 2 22 3.8 22 6V12L18 14C18 9.6 14.4 6 10 6L12 2H18M18 20V16L22 14V20C22 21.1 21.1 22 20 22S18 21.1 18 20Z" fill="${color}"/></svg>