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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19.5,14.5A7.5,7.5 0 0,1 12,22A7.5,7.5 0 0,1 4.5,14.5C4.5,10.36 7.86,2 12,2C16.14,2 19.5,10.36 19.5,14.5Z" fill="${color}"/></svg>