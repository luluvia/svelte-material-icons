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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11 7H13V9H11V7M5 22H9V10H5V22M14 11H16V9H14V11M17 10H19V8H17V10M17 5V7H19V5H17M14 8H16V6H14V8M17 13H19V11H17V13M5 7H5.33L6 9H8L8.67 7H9V6H5V7Z" fill="${color}"/></svg>