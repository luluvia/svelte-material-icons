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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,2A10,10 0 0,1 22,12A2,2 0 0,1 20,14H4A2,2 0 0,1 2,12A10,10 0 0,1 12,2M12,8A2,2 0 0,0 14,6A2,2 0 0,0 12,4A2,2 0 0,0 10,6A2,2 0 0,0 12,8M17,12A2,2 0 0,0 19,10A2,2 0 0,0 17,8A2,2 0 0,0 15,10A2,2 0 0,0 17,12M7,12A2,2 0 0,0 9,10A2,2 0 0,0 7,8A2,2 0 0,0 5,10A2,2 0 0,0 7,12M15,15L16.27,19.45L16.35,20C16.35,21.1 15.45,22 14.35,22H9.65A2,2 0 0,1 7.65,20L7.73,19.45L9,15H15Z" fill="${color}"/></svg>