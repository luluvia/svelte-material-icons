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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11 18.5V13H9L13 5.5V11H15M17 19H7V5H17M17 1H7C5.89 1 5 1.89 5 3V21A2 2 0 0 0 7 23H17A2 2 0 0 0 19 21V3C19 1.89 18.1 1 17 1Z" fill="${color}"/></svg>