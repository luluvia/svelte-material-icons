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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M9,2A7,7 0 0,1 16,9C16,10.5 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.5,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2M11.12,5.46L9,7.59L6.88,5.46L5.46,6.88L7.59,9L5.46,11.12L6.88,12.54L9,10.41L11.12,12.54L12.54,11.12L10.41,9L12.54,6.88L11.12,5.46Z" fill="${color}"/></svg>