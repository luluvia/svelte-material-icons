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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1 6V19A2 2 0 0 0 3 21H9V11H21V6A2 2 0 0 0 19 4H3A2 2 0 0 0 1 6M3 6H7V9H3M7 19H3V16H7M7 14H3V11H7M9 9V6H13V9M19 9H15V6H19M17 16A1 1 0 1 1 16 17A1 1 0 0 1 17 16M17 13A6.45 6.45 0 0 1 23 17A6.5 6.5 0 0 1 11 17A6.45 6.45 0 0 1 17 13M17 14.5A2.5 2.5 0 1 0 19.5 17A2.5 2.5 0 0 0 17 14.5" fill="${color}"/></svg>