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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4.93 4.92L6.34 6.33C9.46 3.2 14.53 3.2 17.66 6.33L19.07 4.92C15.17 1 8.84 1 4.93 4.92M7.76 7.75L9.17 9.16C10.73 7.6 13.26 7.6 14.83 9.16L16.24 7.75C13.9 5.41 10.1 5.41 7.76 7.75M18 11H6C4.89 11 4 11.9 4 13V21C4 22.11 4.89 23 6 23H18C19.11 23 20 22.11 20 21V13C20 11.9 19.11 11 18 11M18 17H6V14H18V17Z" fill="${color}"/></svg>