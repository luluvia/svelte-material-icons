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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15.68,15C15.34,13.3 13.82,12 12,12C10.55,12 9.3,12.82 8.68,14C7.17,14.18 6,15.45 6,17A3,3 0 0,0 9,20H15.5A2.5,2.5 0 0,0 18,17.5C18,16.18 16.97,15.11 15.68,15Z" fill="${color}"/></svg>