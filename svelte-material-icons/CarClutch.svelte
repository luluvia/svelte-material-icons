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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M10 18.84L14 20.7V23L8 20V14H5V10H8V4L14 1V3.3L10 5.16V18.84M19 10H15V5.41L12 6.8V17.2L15 18.6V14H19V10Z" fill="${color}"/></svg>