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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19 10V7A2 2 0 0 0 17 5H7A2 2 0 0 0 5 7V10A2 2 0 0 0 3 12V17H4.33L5 19H6L6.67 17H17.33L18 19H19L19.67 17H21V12A2 2 0 0 0 19 10M7 7H17V10H7M19 15H5V12H19Z" fill="${color}"/></svg>