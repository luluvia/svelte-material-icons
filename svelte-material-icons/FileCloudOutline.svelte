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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M17 16.92C17 18.07 16.07 19 14.92 19H9.5C8.12 19 7 17.88 7 16.5C7 15.21 8 14.15 9.23 14C9.75 13 10.79 12.33 12 12.33C13.5 12.33 14.78 13.42 15.07 14.83C16.14 14.93 17 15.82 17 16.92Z" fill="${color}"/></svg>