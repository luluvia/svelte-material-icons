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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13 19C13 17.5 13.5 16.2 14.4 15.1L11 13V7H12.5V12.2L15.6 14.1C16.6 13.4 17.7 13 19 13C20 13 21 13.3 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.3 21 13 20 13 19Z" fill="${color}"/></svg>