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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22 18L17 22L9 19V22L4.81 16.25L17.72 17.3V6.34L22 5.65V18M4.81 16.25V8.96L17.72 6.34L10.6 2V4.84L3.97 6.76L2 9.38V15.07L4.81 16.25Z" fill="${color}"/></svg>