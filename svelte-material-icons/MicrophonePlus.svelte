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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M9,2A3,3 0 0,1 12,5V11A3,3 0 0,1 9,14A3,3 0 0,1 6,11V5A3,3 0 0,1 9,2M16,11C16,14.5 13.44,17.43 10,17.93V21H8V17.93C4.56,17.43 2,14.5 2,11H4A5,5 0 0,0 9,16A5,5 0 0,0 14,11H16M15,5H18V2H20V5H23V7H20V10H18V7H15V5Z" fill="${color}"/></svg>