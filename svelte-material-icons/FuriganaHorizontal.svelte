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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M8.5 2C7.12 2 6 3.12 6 4.5S7.12 7 8.5 7 11 5.88 11 4.5 9.88 2 8.5 2M15.5 2C14.12 2 13 3.12 13 4.5S14.12 7 15.5 7 18 5.88 18 4.5 16.88 2 15.5 2M11 8V10H5V12H14.95C14.53 13.13 13.5 14.5 12.16 15.67C11.12 14.74 10.35 13.82 9.82 13H7.5C8.08 14.25 9.13 15.62 10.62 16.96L6.55 20.22L5.76 20.84L7 22.41L7.8 21.78L12.17 18.28L16.55 21.78L17.33 22.41L18.58 20.84L17.8 20.22L13.73 16.97C15.34 15.5 16.7 13.85 17.07 12H19V10H13V8H11Z" fill="${color}"/></svg>