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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2 7H8V9H4V11H7V13H4V17H2V7M10 7H14V17H12V9H10V7M18 7H20C21.11 7 22 7.9 22 9V15C22 16.11 21.11 17 20 17H18C16.9 17 16 16.11 16 15V9C16 7.9 16.9 7 18 7M18 9V15H20V9H18Z" fill="${color}"/></svg>