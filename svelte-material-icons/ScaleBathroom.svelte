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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2M12,4A4,4 0 0,0 8,8H11.26L10.85,5.23L12.9,8H16A4,4 0 0,0 12,4M5,10V20H19V10H5Z" fill="${color}"/></svg>