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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H8A2,2 0 0,1 6,16V4A2,2 0 0,1 8,2H20M17,7A3,3 0 0,0 14,4A3,3 0 0,0 11,7A3,3 0 0,0 14,10A3,3 0 0,0 17,7M8,15V16H20V15C20,13 16,11.9 14,11.9C12,11.9 8,13 8,15Z" fill="${color}"/></svg>