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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22,2L17.39,3.75L10.46,10.68L14,14.22L20.92,7.29C22.43,5.78 22,2 22,2M8.33,10L6.92,11.39L8.33,12.8L2.68,18.46L6.21,22L11.87,16.34L13.28,17.76L14.7,16.34L8.33,10Z" fill="${color}"/></svg>