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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M8.5 4L9.35 7H4.65L5.5 4H8.5M10 2H4L2 9H12L10 2M6 10H8V20H11V22H3V20H6V10M18.5 10L19.35 13H14.65L15.5 10H18.5M20 8H14L12 15H22L20 8M16 16H18V20H21V22H13V20H16V16Z" fill="${color}"/></svg>