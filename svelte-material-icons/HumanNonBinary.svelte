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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12 2C13.11 2 14 2.9 14 4S13.11 6 12 6 10 5.11 10 4 10.9 2 12 2M13.91 8.41C13.66 7.59 12.9 7 12 7H10.5C9.4 7 8.5 7.9 8.5 9V14.5H10V22H13.5V16H16.5L13.91 8.41Z" fill="${color}"/></svg>