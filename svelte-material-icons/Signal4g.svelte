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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16A3,3 0 0,0 13,7.5V16.5A3,3 0 0,0 16,19.5H19A3,3 0 0,0 22,16.5M8,19.5H11V4.5H8V10.5H5V4.5H2V13.5H8V19.5Z" fill="${color}"/></svg>