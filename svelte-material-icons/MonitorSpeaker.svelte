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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M10 20V18H3C1.9 18 1 17.1 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4V8H21V4H3V16H12V22H8V20H10M18.5 15C17.12 15 16 16.12 16 17.5S17.12 20 18.5 20 21 18.88 21 17.5 19.88 15 18.5 15M23 10V21C23 21.55 22.55 22 22 22H15C14.45 22 14 21.55 14 21V10C14 9.45 14.45 9 15 9H22C22.55 9 23 9.45 23 10M17 11.5C17 12.33 17.67 13 18.5 13S20 12.33 20 11.5 19.33 10 18.5 10 17 10.67 17 11.5M22 17.5C22 15.57 20.43 14 18.5 14S15 15.57 15 17.5 16.57 21 18.5 21 22 19.43 22 17.5Z" fill="${color}"/></svg>