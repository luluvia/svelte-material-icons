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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M17 12C17 7.55 11.62 5.31 8.46 8.46C5.31 11.61 7.55 17 12 17C14.76 17 17 14.76 17 12M12 15C9.33 15 8 11.77 9.88 9.88C11.77 8 15 9.33 15 12C15 13.66 13.66 15 12 15M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19" fill="${color}"/></svg>