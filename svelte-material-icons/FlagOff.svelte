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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20.84 22.73L14.11 16H13L12.72 14.61L12.11 14H7V21H5V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M20 16V6H14.4L14 4H7.2L19.2 16H20" fill="${color}"/></svg>