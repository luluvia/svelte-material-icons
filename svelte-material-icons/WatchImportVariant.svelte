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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1,11H6L3.5,8.5L4.92,7.08L9.84,12L4.92,16.92L3.5,15.5L6,13H1V11M8,0H16L16.83,5H17A2,2 0 0,1 19,7V17C19,18.11 18.1,19 17,19H16.83L16,24H8L7.17,19H7C6.46,19 6,18.79 5.62,18.44L7.06,17H17V7H7.06L5.62,5.56C6,5.21 6.46,5 7,5H7.17L8,0Z" fill="${color}"/></svg>