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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M8.5,2C11.85,2 14.6,4.53 14.96,7.78L22,12V14L20,12.8V22H18V11.6L15,9.8V22H13V9H4V22H2V8.5A6.5,6.5 0 0,1 8.5,2M8.5,4C6.54,4 4.87,5.25 4.26,7H12.74C12.13,5.25 10.46,4 8.5,4M6,11H11V13H6V11M6,15H11V17H6V15M6,19H11V21H6V19Z" fill="${color}"/></svg>