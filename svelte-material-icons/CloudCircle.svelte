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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M16.5,16H8A3,3 0 0,1 5,13A3,3 0 0,1 8,10C8.05,10 8.09,10 8.14,10C8.58,8.28 10.13,7 12,7A4,4 0 0,1 16,11H16.5A2.5,2.5 0 0,1 19,13.5A2.5,2.5 0 0,1 16.5,16M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="${color}"/></svg>