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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.34,17.77L15.75,16.36L20,20.58L18.56,22L14.34,17.77M18.5,2A3.5,3.5 0 0,1 22,5.5A3.5,3.5 0 0,1 18.5,9A3.5,3.5 0 0,1 15,5.5A3.5,3.5 0 0,1 18.5,2M2.24,7.11L5.07,4.28C5.46,3.89 6.09,3.89 6.5,4.28L14.97,12.77C15.36,13.16 15.36,13.79 14.97,14.18L12.14,17C11.75,17.4 11.12,17.4 10.72,17L2.24,8.53C1.85,8.13 1.85,7.5 2.24,7.11Z" fill="${color}"/></svg>