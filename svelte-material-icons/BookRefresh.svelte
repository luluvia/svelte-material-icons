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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12 18.5C12 19.79 12.39 21 13.04 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V12.18C19.5 12.07 19 12 18.5 12C14.91 12 12 14.91 12 18.5M22 18.5V14.5L20.83 15.67C20.11 14.95 19.11 14.5 18 14.5C15.79 14.5 14 16.29 14 18.5S15.79 22.5 18 22.5C19.68 22.5 21.12 21.47 21.71 20H20C19.54 20.61 18.82 21 18 21C16.62 21 15.5 19.88 15.5 18.5S16.62 16 18 16C18.69 16 19.32 16.28 19.77 16.73L18 18.5H22Z" fill="${color}"/></svg>