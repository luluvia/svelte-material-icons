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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22 17C22.5 17 23 17.5 23 18V22C23 22.5 22.5 23 22 23H17C16.5 23 16 22.5 16 22V18C16 17.5 16.5 17 17 17V15.5C17 14.1 18.1 13 19.5 13C20.9 13 22 14.1 22 15.5V17M21 17V15.5C21 14.7 20.3 14 19.5 14C18.7 14 18 14.7 18 15.5V17H21M17.5 11V10.5C17.5 7.46 15.04 5 12 5C9.5 5 7.37 6.69 6.71 9H6C3.79 9 2 10.79 2 13C2 15.21 3.79 17 6 17H14.17C14.06 17.31 14 17.65 14 18V19H6C2.69 19 0 16.31 0 13C0 9.9 2.34 7.36 5.35 7.04C6.6 4.64 9.11 3 12 3C15.64 3 18.67 5.6 19.36 9.04C21.95 9.22 24 11.36 24 14L23.94 14.77C23.59 12.63 21.74 11 19.5 11H17.5Z" fill="${color}"/></svg>