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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20.8 22.7L18.1 20H3V13H2V11H3C3 9.9 3.9 9 5 9H7.1L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M15.3 12.1C15.6 11.5 16.3 11 17 11C18.1 11 19 11.9 19 13C19 13.8 18.6 14.4 17.9 14.7L21 17.8V13H22V11H21C21 9.9 20.1 9 19 9H12.2L15.3 12.1M18 8C17.6 5.8 15.1 4 12 4C10.6 4 9.2 4.4 8.2 5L11.2 8H18Z" fill="${color}"/></svg>