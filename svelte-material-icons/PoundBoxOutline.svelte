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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19 19H5V5H19M19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M7 9H9.31L9.63 6H11.63L11.31 9H13.31L13.63 6H15.63L15.31 9H17V11H15.1L14.9 13H17V15H14.69L14.37 18H12.37L12.69 15H10.69L10.37 18H8.37L8.69 15H7V13H8.9L9.1 11H7V9M11.1 11L10.9 13H12.9L13.1 11Z" fill="${color}"/></svg>