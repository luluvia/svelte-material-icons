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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M16,4L9,8.04V15.96L16,20L23,15.96V8.04M16,6.31L19.8,8.5L16,10.69L12.21,8.5M0,7V9H7V7M11,10.11L15,12.42V17.11L11,14.81M21,10.11V14.81L17,17.11V12.42M2,11V13H7V11M4,15V17H7V15" fill="${color}"/></svg>