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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M3,5H15A2,2 0 0,1 17,7V17A2,2 0 0,1 15,19H3A2,2 0 0,1 1,17V7A2,2 0 0,1 3,5M3,9V12H8V9H3M10,9V12H15V9H10M3,14V17H8V14H3M10,14V17H15V14H10M23,14V7H19V9H21V12H19V14H23Z" fill="${color}"/></svg>