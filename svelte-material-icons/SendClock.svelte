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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2 3V10L11 12L2 14V21L9.27 17.89A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 16 9L2 3M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12.5V16.5L18 18.5L18.75 17.25L16.5 15.75V12.5H15Z" fill="${color}"/></svg>