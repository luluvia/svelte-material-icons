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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,2H19A1,1 0 0,1 20,3V13A1,1 0 0,1 19,14H5A1,1 0 0,1 4,13V3A1,1 0 0,1 5,2M6,4V12H18V4H6M20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17V16H20V17M20,21A1,1 0 0,1 19,22H5A1,1 0 0,1 4,21V20H20V21Z" fill="${color}"/></svg>