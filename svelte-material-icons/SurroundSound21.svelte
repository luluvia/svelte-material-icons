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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4 7V9H8V11H6C4.9 11 4 11.9 4 13V17H10V15H6V13H8C9.1 13 10 12.1 10 11V9C10 7.9 9.1 7 8 7H4M14 17H12V15H14V17M16 7V9H18V17H20V7H16Z" fill="${color}"/></svg>