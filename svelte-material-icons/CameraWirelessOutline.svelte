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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20,9V20H4V8H8.05L9.88,6H15V4H9L7.17,6H4A2,2 0 0,0 2,8V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V9H20M20.67,8H22C22,4.68 19.31,2 16,2V3.33C18.58,3.33 20.66,5.41 20.67,8M18,8H19.33C19.32,6.15 17.84,4.67 16,4.67V6C17.11,6 18,6.89 18,8M7,14A5,5 0 0,0 12,19A5,5 0 0,0 17,14A5,5 0 0,0 12,9A5,5 0 0,0 7,14M15,14A3,3 0 0,1 12,17A3,3 0 0,1 9,14A3,3 0 0,1 12,11A3,3 0 0,1 15,14Z" fill="${color}"/></svg>