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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18 4L20 7H17L15 4H13L15 7H12L10 4H8L10 7H7L5 4H4C2.9 4 2 4.9 2 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4H18M11.25 15.25L10 18L8.75 15.25L6 14L8.75 12.75L10 10L11.25 12.75L14 14L11.25 15.25M16.94 11.94L16 14L15.06 11.94L13 11L15.06 10.06L16 8L16.94 10.06L19 11L16.94 11.94Z" fill="${color}"/></svg>