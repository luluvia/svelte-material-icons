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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M8,6A6,6 0 0,0 2,12V16.8C2,17.46 2.54,18 3.2,18H6V14H4V12A4,4 0 0,1 8,8A4,4 0 0,1 12,12V14H10V18H12.8A1.2,1.2 0 0,0 14,16.8V12A6,6 0 0,0 8,6M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M20,13.21L20.94,14.14L20,15.08V13.21Z" fill="${color}"/></svg>