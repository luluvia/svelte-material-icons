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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4 4H6V6H4V4M6 20H4V18H6V20M18 8V16H16V18H8V16H6V8H8V2H2V8H4V16H2V22H8V20H16V22H22V16H20V8H22V2H16V8H18M20 20H18V18H20V20M18 6V4H20V6H18Z" fill="${color}"/></svg>