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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M8,17H10V7H6V9H8M14,7H16C17.11,7 18,7.9 18,9V15C18,16.11 17.11,17 16,17H14A2,2 0 0,1 12,15V9A2,2 0 0,1 14,7M14,9V15H16V9H14Z" fill="${color}"/></svg>