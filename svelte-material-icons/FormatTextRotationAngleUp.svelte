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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20.58 9.33V13.55L19.17 12.14L10.31 21L8.91 19.59L17.72 10.73L16.31 9.33M7.59 11L10.22 8.39L5.34 6.14M4.5 4.22L15.61 8.63L14.16 10.13L11.96 9.19L8.39 12.75L9.33 14.91L7.83 16.41L3.42 5.25Z" fill="${color}"/></svg>