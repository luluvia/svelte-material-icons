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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4,12V3H2V12A5,5 0 0,0 7,17H13V15H7A3,3 0 0,1 4,12M22.83,17.24C22.45,16.5 21.54,16.27 20.8,16.61L19.71,17.11L16.3,10.13C15.96,9.45 15.27,9 14.5,9H11V3H5V11A3,3 0 0,0 8,14H15L18.41,21L22.13,19.3C22.9,18.94 23.23,18 22.83,17.24Z" fill="${color}"/></svg>