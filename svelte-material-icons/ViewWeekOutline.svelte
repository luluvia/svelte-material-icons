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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21 4H3C2.45 4 2 4.45 2 5V19C2 19.55 2.45 20 3 20H21C21.55 20 22 19.55 22 19V5C22 4.45 21.55 4 21 4M8 18H4V6H8V18M14 18H10V6H14V18M20 18H16V6H20V18Z" fill="${color}"/></svg>