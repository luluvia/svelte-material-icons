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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1,4.27L2.28,3L21,21.72L19.73,23L16,19.27V21H8V19H6V21H4V7.27L1,4.27M18,9V7H16V9H18M18,13V11H16V13H18M18,15H16.82L6.82,5H8V3H16V5H18V3H20V18.18L18,16.18V15M8,13V11.27L7.73,11H6V13H8M8,17V15H6V17H8M6,3V4.18L4.82,3H6Z" fill="${color}"/></svg>