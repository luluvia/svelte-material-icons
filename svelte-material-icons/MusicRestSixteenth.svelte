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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M15 3A5.56 5.56 0 0 1 11.95 4.86A1.5 1.5 0 1 0 10.5 6H10.74A6.32 6.32 0 0 0 14.25 4.93L12.9 9.1A5.56 5.56 0 0 1 9.95 10.86A1.5 1.5 0 1 0 8.5 12H8.74A6.32 6.32 0 0 0 12.25 10.93L9 21H11L17 3Z" fill="${color}"/></svg>