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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M9.8,17L5.9,11.6L20,2L22,5V8H19V11H16V14H13V17M9.7,18.7L9.2,21.5L7.6,22.7C6.7,23.3 5.5,23.1 4.8,22.2L1.3,17.3C0.7,16.4 0.9,15.2 1.8,14.5L5.1,12.2L9.7,18.7M4.6,15L3,16.1L6.5,21L8.1,19.8L4.6,15Z" fill="${color}"/></svg>