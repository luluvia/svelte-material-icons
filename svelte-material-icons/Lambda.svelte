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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6,20L10.16,7.91L9.34,6H8V4H10C10.42,4 10.78,4.26 10.93,4.63L16.66,18H18V20H16C15.57,20 15.21,19.73 15.07,19.36L11.33,10.65L8.12,20H6Z" fill="${color}"/></svg>