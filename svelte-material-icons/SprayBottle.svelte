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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,7H15C15.66,7.64 16,8.31 16,9V22H8V15C8,14.72 8.11,14.39 8.3,14L12,7M16,4L15,6H12V5L10,7H9L10,5V4H9V2H14.5A1.5,1.5 0 0,1 16,3.5V4Z" fill="${color}"/></svg>