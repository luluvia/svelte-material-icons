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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M8.5,9A6.5,6.5 0 0,0 2,15.5A6.5,6.5 0 0,0 8.5,22A6.5,6.5 0 0,0 15,15.5V13.91L22,12V9H11V11H9V9H8.5M11,2V7H9V2H11M6.35,7.28C5.68,7.44 5.04,7.68 4.43,8L2.14,4.88L3.76,3.7L6.35,7.28M17.86,4.88L16.32,7H13.85L16.24,3.7L17.86,4.88Z" fill="${color}"/></svg>