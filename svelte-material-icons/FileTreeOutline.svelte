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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12 13H7V18H12V20H5V10H7V11H12V13M8 4V6H4V4H8M10 2H2V8H10V2M20 11V13H16V11H20M22 9H14V15H22V9M20 18V20H16V18H20M22 16H14V22H22V16Z" fill="${color}"/></svg>