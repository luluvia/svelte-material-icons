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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14,3V13L17.2,11.31L17.42,11.28C17.71,11.28 17.97,11.4 18.16,11.6L18.9,12.37L14,16.57C13.74,16.84 13.39,17 13,17H6.5C5.73,17 5,16.3 5,15.5V11.14C5,10.53 5.35,10 5.85,9.8L10.79,7.6L12,7.47V3A1,1 0 0,1 13,2A1,1 0 0,1 14,3M5,19H13V22H5V19Z" fill="${color}"/></svg>