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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M13 3C8 3 4 7 4 12H1L4.9 15.9L5 16L9 12H6C6 8.1 9.1 5 13 5S20 8.1 20 12 16.9 19 13 19C11.1 19 9.3 18.2 8.1 16.9L6.7 18.3C8.3 20 10.5 21 13 21C18 21 22 17 22 12S18 3 13 3M12 15H14V17H12V15M12 7H14V13H12V7" fill="${color}"/></svg>