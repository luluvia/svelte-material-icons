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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22 13V8L17 5L12 8L7 5L2 8V13L12 19L22 13M9 11H7V13H6V11H4V10H6V8H7V10H9V11M15 13C14.45 13 14 12.55 14 12S14.45 11 15 11 16 11.45 16 12 15.55 13 15 13M18 11C17.45 11 17 10.55 17 10S17.45 9 18 9 19 9.45 19 10 18.55 11 18 11Z" fill="${color}"/></svg>