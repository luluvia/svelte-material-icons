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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21,1L12.4,9.6L13.85,11.05L19,5.83V16.19L21,18.19M4.77,4.5L3.5,5.77L9.86,12.13L1,21H18.73L20.73,23L22,21.73M11.33,13.6L16.73,19H6" fill="${color}"/></svg>