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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M3,3H16V6H11V18H8V6H3V3M12,7H14V9H12V7M15,7H17V9H15V7M18,7H20V9H18V7M12,10H14V12H12V10M12,13H14V15H12V13M12,16H14V18H12V16M12,19H14V21H12V19Z" fill="${color}"/></svg>