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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21.59,11.59L13.5,19.68L9.83,16L8.42,17.41L13.5,22.5L23,13M6.43,11L8.5,5.5L10.57,11M12.45,16H14.54L9.43,3H7.57L2.46,16H4.55L5.67,13H11.31L12.45,16Z" fill="${color}"/></svg>