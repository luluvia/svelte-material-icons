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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6.59,3.41L2,8L6.59,12.6L8,11.18L4.82,8L8,4.82L6.59,3.41M12.41,3.41L11,4.82L14.18,8L11,11.18L12.41,12.6L17,8L12.41,3.41M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13L21.59,11.59Z" fill="${color}"/></svg>