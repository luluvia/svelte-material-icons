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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M23 3V2.5C23 1.12 21.88 0 20.5 0S18 1.12 18 2.5V3C17.45 3 17 3.45 17 4V8C17 8.55 17.45 9 18 9H23C23.55 9 24 8.55 24 8V4C24 3.45 23.55 3 23 3M22 3H19V2.5C19 1.67 19.67 1 20.5 1S22 1.67 22 2.5V3M6 11H15V13H6V11M6 7H15V9H6V7M22 11V16C22 17.11 21.11 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H15V4H4V17.17L5.17 16H20V11H22Z" fill="${color}"/></svg>