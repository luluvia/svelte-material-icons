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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,20C9.79,20 7.79,19.1 6.34,17.66L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20M6,8H8V6H9.5V8H11.5V9.5H9.5V11.5H8V9.5H6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,16H17V14.5H12V16Z" fill="${color}"/></svg>