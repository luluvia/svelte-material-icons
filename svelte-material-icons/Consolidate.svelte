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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18 9H20V4H22V9A2 2 0 0 1 20 11H18V13L15 10L18 7M14 10A2 2 0 1 0 12 12A2 2 0 0 0 14 10M2 11V16H4V11H6V13L9 10L6 7V9H4A2 2 0 0 0 2 11M15 16L12 13L9 16H11V18A2 2 0 0 0 13 20H18V18H13V16" fill="${color}"/></svg>