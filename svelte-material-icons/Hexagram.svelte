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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z" fill="${color}"/></svg>