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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,2V6H3V8H5V10H3V12H5V22H7V16H13C15.7,16 18.16,14.44 19.32,12H22V10H19.92C20.03,9.34 20.03,8.66 19.92,8H22V6H19.32C18.16,3.56 15.7,2 13,2M7,4H13C14.57,4 16.06,4.74 17,6H7V4M13,14H7V12H17C16.06,13.26 14.57,14 13,14M18,9C18,9.34 17.96,9.67 17.9,10H7V8H17.9C17.96,8.33 18,8.66 18,9Z" fill="${color}"/></svg>