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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,7H9V9H3V7M21,7V9H15V7H21M3,11H7V13H3V11M21,11V13H17V11H21M3,15H6V17H3V15M21,15V17H18V15H21M3,19H21V21H3V19Z" fill="${color}"/></svg>