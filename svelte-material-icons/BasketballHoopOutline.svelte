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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21,2H3A2,2 0 0,0 1,4V16A2,2 0 0,0 3,18H6.57L8,23L10,21L12,23L14,21L16,23L17.43,18H21A2,2 0 0,0 23,16V4A2,2 0 0,0 21,2M21,16H18V14H17V9A2,2 0 0,0 15,7H9A2,2 0 0,0 7,9V14H6V16H3V4H21V16M9,14V9H15V14H9Z" fill="${color}"/></svg>