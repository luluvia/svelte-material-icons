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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6,22H18L12,16M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H7V17H3V5H21V17H17V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z" fill="${color}"/></svg>