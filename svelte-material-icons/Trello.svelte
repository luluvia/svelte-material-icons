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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19.5,2H4.5A2.5,2.5 0 0,0 2,4.5V19.5A2.5,2.5 0 0,0 4.5,22H19.5A2.5,2.5 0 0,0 22,19.5V4.5A2.5,2.5 0 0,0 19.5,2M10.7,17.2A1.2,1.2 0 0,1 9.5,18.4H5.8C5.14,18.4 4.6,17.86 4.6,17.2V5.8A1.2,1.2 0 0,1 5.8,4.6H9.5C10.16,4.6 10.7,5.14 10.7,5.8V17.2M19.4,12.2C19.4,12.86 18.86,13.4 18.2,13.4H14.5C13.84,13.4 13.3,12.86 13.3,12.2V5.8C13.3,5.14 13.84,4.6 14.5,4.6H18.2C18.86,4.6 19.4,5.14 19.4,5.8V12.2Z" fill="${color}"/></svg>