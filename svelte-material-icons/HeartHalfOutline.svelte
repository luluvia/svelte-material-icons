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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4,8.5C4,11.2 6.75,13.87 11,17.74V7.2C10.42,5.91 9,5 7.5,5C5.5,5 4,6.5 4,8.5M13,7.2V17.74L13,20.44L12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C10,3 13,5 13,7.2Z" fill="${color}"/></svg>