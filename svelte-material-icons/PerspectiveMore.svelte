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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M16.56,12L19.23,20H4.78L7.44,12H16.56M17,1L13,5L17,9V6H21V4H17V1M7,1V4H3V6H7V9L11,5L7,1M18,10H6L2,22H22L18,10Z" fill="${color}"/></svg>