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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,2H15L11.5,9H15L8,22V14H5V2M7,4V12H10V14.66L12,11H8.24L11.76,4M17,15H19V17H17V15M17,7H19V13H17V7Z" fill="${color}"/></svg>