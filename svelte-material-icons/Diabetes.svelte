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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.73 2.29A1 1 0 0 1 16.14 3.7L13 6.79L13.76 7.74L15.7 12.74A1.46 1.46 0 0 1 15.36 14.29L12.27 17.38A1.55 1.55 0 0 1 10.15 17.38L5.55 12.78A1.37 1.37 0 0 1 5.15 11.78L4.65 5.34H5.72A1 1 0 0 1 6.47 5.64L6.61 5.81L7.66 9.29M7.66 22L2 16.36L4.12 14.24L9.78 19.9M19.5 4.5S17 7.26 17 9A2.5 2.5 0 1 0 22 9C22 7.26 19.5 4.5 19.5 4.5Z" fill="${color}"/></svg>