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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M15.5,6V1H8.5V6H3V13H8.5V23H15.5V13H21V6H15.5M19,11H13.5V21H10.5V11H5V8H10.5V3H13.5V8H19V11Z" fill="${color}"/></svg>