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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.4 10.7H18.5L16.5 5.3L14.4 10.7M15.6 3H17.3L22 15H20.1L19.1 12.4H13.7L12.7 15H10.8L15.6 3M11.2 3H13.1L8.4 15H6.7L2 3H3.9L7.5 12.7M19 22V20H5V22L2 19L5 16V18H19V16L22 19L19 22Z" fill="${color}"/></svg>