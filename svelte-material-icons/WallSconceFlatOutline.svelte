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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5 5V11H19V5H5M17 9H7V7H17V9M5.27 13.32L3.5 15.09L4.91 16.5L6.68 14.73L5.27 13.32M18.73 13.32L17.32 14.73L19.09 16.5L20.5 15.09L18.73 13.32M11 16V19H13V16H11Z" fill="${color}"/></svg>