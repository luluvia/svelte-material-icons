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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22 7V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C14 2.3 14 2.7 14 3S14 3.7 14.1 4H4V16H20V7.9C20.7 7.8 21.4 7.4 22 7M16 3C16 4.7 17.3 6 19 6S22 4.7 22 3 20.7 0 19 0 16 1.3 16 3Z" fill="${color}"/></svg>