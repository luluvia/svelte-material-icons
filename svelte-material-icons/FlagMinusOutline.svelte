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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12.36 6L12.76 8H18V14H14.64L14.24 12H7V6H12.36M14 4H5V21H7V14H12.6L13 16H20V6H14.4M23 18H15V20H23V18Z" fill="${color}"/></svg>