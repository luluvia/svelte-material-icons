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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1,10V2L10,5V7L1,10M8,10V8H13V4H8V3L12,1L16,3V4H15V8H16V10H14.74L8.44,13.64L9,10H8M7,23L7.04,22.76L16.15,17.5L16.67,20.88L13,23H7M8.05,16.17L15.31,12L15.83,15.37L7.43,20.22L8.05,16.17Z" fill="${color}"/></svg>