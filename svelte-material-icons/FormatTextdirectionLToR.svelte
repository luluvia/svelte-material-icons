<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let title;
  export let desc;
  export let ariaHidden = false;
</script>

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9A4,4 0 0,0 5,6A4,4 0 0,0 9,10Z" fill="${color}"/></svg>