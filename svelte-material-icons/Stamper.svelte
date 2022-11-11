<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let title;
  export let desc;
  export let ariaHidden = false;
</script>

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,3A3,3 0 0,0 9,6C9,9 14,13 6,13A2,2 0 0,0 4,15V17H20V15A2,2 0 0,0 18,13C10,13 15,9 15,6C15,4 13.66,3 12,3M6,19V21H18V19H6Z" fill="${color}"/></svg>