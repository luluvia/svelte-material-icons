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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6.5 15V11H9.5V15H13V9H15L8 3L1 9H3V15H6.5M9 16V18H15V16L18 19L15 22V20H9V22L6 19L9 16M23 9H21V15H15V10H19L13.54 5.11L16 3L23 9Z" fill="${color}"/></svg>