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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14,18V20H16V22H8V20H10V18H3A2,2 0 0,1 1,16V4L0,3L1.41,1.58L22.16,22.34L20.75,23.75L15,18H14M3,16H13L3,6V16M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H20.66L18.66,16H21V4H6.66L4.66,2H21Z" fill="${color}"/></svg>