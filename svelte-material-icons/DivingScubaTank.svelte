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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19,18.5A2.5,2.5 0 0,1 16.5,21A2.5,2.5 0 0,1 14,18.5C14,17.47 14.62,16.59 15.5,16.21V6H11V7.35C12.22,7.93 13,9.15 13,10.5V22H6V10.5C6,9.15 6.78,7.93 8,7.35V6H6V4H8V3.5A1.5,1.5 0 0,1 9.5,2A1.5,1.5 0 0,1 11,3.5V4H15.5A2,2 0 0,1 17.5,6V16.21C18.38,16.59 19,17.47 19,18.5Z" fill="${color}"/></svg>