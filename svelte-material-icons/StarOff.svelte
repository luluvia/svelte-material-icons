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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20.8 22.7L17.9 19.8L18.2 21L12 17.3L5.8 21L7.4 14L2 9.2L6.9 8.8L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M22 9.2L14.8 8.6L12 2L10 6.8L16.9 13.7L22 9.2Z" fill="${color}"/></svg>