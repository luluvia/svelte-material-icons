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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19 15H17V13H19M20 20V22H16V20H17V18H16V16H19V20M18.92 5A1.5 1.5 0 0 0 17.5 4H6.5A1.5 1.5 0 0 0 5.08 5L3 11V19A1 1 0 0 0 4 20H5A1 1 0 0 0 6 19V18H11A7 7 0 0 1 18 11A6.84 6.84 0 0 1 21 11.68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10L6.5 5.5H17.5L19 10Z" fill="${color}"/></svg>