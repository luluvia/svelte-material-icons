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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M3.28,4L2,5.27L5,8.27V21L12,18L16.78,20.05L18.73,22L20,20.72L3.28,4M7,18V10.27L13,16.25L12,15.82L7,18M7,5.16L5.5,3.67C5.88,3.26 6.41,3 7,3H17A2,2 0 0,1 19,5V17.16L17,15.16V5H7V5.16Z" fill="${color}"/></svg>