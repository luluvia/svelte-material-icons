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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4M12,6.5A1.5,1.5 0 0,1 13.5,8A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 10.5,8A1.5,1.5 0 0,1 12,6.5M12,14.5A1.5,1.5 0 0,0 10.5,16A1.5,1.5 0 0,0 12,17.5A1.5,1.5 0 0,0 13.5,16A1.5,1.5 0 0,0 12,14.5Z" fill="${color}"/></svg>