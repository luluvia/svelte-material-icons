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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M14.5 18.9L12 17.5L9.5 19L10.2 16.2L8 14.3L10.9 14.1L12 11.4L13.1 14L16 14.2L13.8 16.1L14.5 18.9M13 9V3.5L18.5 9H13Z" fill="${color}"/></svg>