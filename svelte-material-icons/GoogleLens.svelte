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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6,2H18A4,4 0 0,1 22,6V12H20V6A2,2 0 0,0 18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H12V22H6A4,4 0 0,1 2,18V6A4,4 0 0,1 6,2M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M18,16A2,2 0 0,1 20,18A2,2 0 0,1 18,20A2,2 0 0,1 16,18A2,2 0 0,1 18,16Z" fill="${color}"/></svg>