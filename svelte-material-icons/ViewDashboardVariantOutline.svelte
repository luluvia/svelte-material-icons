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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2 5V19H22V5H2M20 12H16V7H20V12M14 10H10V7H14V10M10 12H14V17H10V12M4 7H8V17H4V7M16 17V14H20V17H16Z" fill="${color}"/></svg>