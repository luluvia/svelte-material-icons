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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12 20C16.42 20 20 16.42 20 12S16.42 4 12 4 4 7.58 4 12 7.58 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2M15.3 7.8L12.3 13H11V7H12.5V9.65L14 7.05L15.3 7.8Z" fill="${color}"/></svg>