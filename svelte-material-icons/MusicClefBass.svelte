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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18.5 5A1.5 1.5 0 1 1 17 6.5A1.5 1.5 0 0 1 18.5 5M18.5 11A1.5 1.5 0 1 1 17 12.5A1.5 1.5 0 0 1 18.5 11M10 4A5 5 0 0 0 5 9V10A2 2 0 1 0 7.18 8A3 3 0 0 1 10 6A4 4 0 0 1 14 10C14 13.59 11.77 16.19 7 18.2L7.76 20.04C13.31 17.72 16 14.43 16 10A6 6 0 0 0 10 4Z" fill="${color}"/></svg>