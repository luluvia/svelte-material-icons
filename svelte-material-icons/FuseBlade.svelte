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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M10,21H8L6,19V16H10V21M18,16H14V21H16L18,19V16M3,3V4A1,1 0 0,0 4,5V14A1,1 0 0,0 5,15H19A1,1 0 0,0 20,14V5H20A1,1 0 0,0 21,4V3H3M11.83,13V9.73H10L12.61,4.66V7.93H14.36L11.83,13Z" fill="${color}"/></svg>