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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M10 11.5C10 12.33 9.33 13 8.5 13S7 12.33 7 11.5 7.67 10 8.5 10 10 10.67 10 11.5M16 17.5C16 18.33 15.33 19 14.5 19S13 18.33 13 17.5 13.67 16 14.5 16 16 16.67 16 17.5M16 11.35L8.37 19L7 17.65L14.65 10L16 11.35Z" fill="${color}"/></svg>