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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.6 9L18 3.1L19.7 4.1L16.9 9H14.6M16.3 10H21V12H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12H3V10H16.3M17 12H7V19H17V12Z" fill="${color}"/></svg>