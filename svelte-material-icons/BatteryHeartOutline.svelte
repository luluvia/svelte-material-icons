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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19 16.2L18.4 15.7C16.4 13.8 15 12.5 15 11C15 9.8 16 8.8 17.2 8.8C17.9 8.8 18.5 9.1 19 9.6C19.5 9.1 20.1 8.8 20.8 8.8C22 8.8 23 9.8 23 11C23 12.5 21.6 13.7 19.6 15.6L19 16.2M12.7 4H11V2H5V4H3.3C2.6 4 2 4.6 2 5.3V20.6C2 21.4 2.6 22 3.3 22H12.6C13.3 22 13.9 21.4 13.9 20.7V5.3C14 4.6 13.4 4 12.7 4M12 20H4V6H12V20Z" fill="${color}"/></svg>