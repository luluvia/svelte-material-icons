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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M8,9V10.5H10.25V15H11.75V10.5H14V9H8M6,9H3A1,1 0 0,0 2,10V15H3.5V13.5H5.5V15H7V10A1,1 0 0,0 6,9M5.5,12H3.5V10.5H5.5V12M21,9H16.5A1,1 0 0,0 15.5,10V15H17V10.5H18V14H19.5V10.5H20.5V15H22V10A1,1 0 0,0 21,9Z" fill="${color}"/></svg>