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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4 3H5V5H3V4C3 3.5 3.5 3 4 3M20 3C20.5 3 21 3.5 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7M21 12C21 12.5 20.5 13 20 13H19V11H21V12M15 13V11H17V13H15M11 13V11H13V13H11M7 13V11H9V13H7M4 13C3.5 13 3 12.5 3 12V11H5V13H4M3 7H5V9H3V7M21 7V9H19V7H21M7 16L12 21L17 16H7Z" fill="${color}"/></svg>