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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21 11A2 2 0 0 0 19 9H5A2 2 0 0 0 3 11H2V13H3V20H21V13H22V11M17 15A2 2 0 1 1 19 13A2 2 0 0 1 17 15M18 8H6C6.33 5.75 8.88 4 12 4S17.63 5.75 18 8Z" fill="${color}"/></svg>