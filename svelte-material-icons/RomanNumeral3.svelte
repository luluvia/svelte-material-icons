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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M9 7V9H8V15H9V17H5V15H6V9H5V7H9M14 7V9H13V15H14V17H10V15H11V9H10V7H14M19 7V9H18V15H19V17H15V15H16V9H15V7H19Z" fill="${color}"/></svg>