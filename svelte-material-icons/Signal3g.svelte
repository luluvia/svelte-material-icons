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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11,16.5V14.25C11,13 10,12 8.75,12C10,12 11,11 11,9.75V7.5A3,3 0 0,0 8,4.5H2V7.5H8V10.5H5V13.5H8V16.5H2V19.5H8A3,3 0 0,0 11,16.5M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16A3,3 0 0,0 13,7.5V16.5A3,3 0 0,0 16,19.5H19A3,3 0 0,0 22,16.5Z" fill="${color}"/></svg>