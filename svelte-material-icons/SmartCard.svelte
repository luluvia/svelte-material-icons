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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2 3H22A2.07 2.07 0 0 1 24 5V19A2.07 2.07 0 0 1 22 21H2A2.07 2.07 0 0 1 0 19V5A2.07 2.07 0 0 1 2 3M8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91M8 6A3 3 0 1 0 11 9A3 3 0 0 0 8 6M17 10V13H21V10H17" fill="${color}"/></svg>