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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22.25,14.29L21.56,16.18L9.2,11.71L11.28,6.05L19.84,9.14C21.94,9.9 23,12.2 22.25,14.29M1.5,12.14L8,14.5V19H16V17.37L20.5,19L21.21,17.11L2.19,10.25M7.3,10.2C8.79,9.5 9.42,7.69 8.71,6.2C8,4.71 6.2,4.08 4.7,4.8C3.21,5.5 2.58,7.3 3.3,8.8C4,10.29 5.8,10.92 7.3,10.2Z" fill="${color}"/></svg>