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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14,12H19.5L14,6.5V12M8,5H15L21,11V21A2,2 0 0,1 19,23H8C6.89,23 6,22.1 6,21V18H11V20L15,17L11,14V16H6V7A2,2 0 0,1 8,5M13.5,3H4V16H6V18H4A2,2 0 0,1 2,16V3A2,2 0 0,1 4,1H11.5L13.5,3Z" fill="${color}"/></svg>