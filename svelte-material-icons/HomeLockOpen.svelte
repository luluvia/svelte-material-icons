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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,3L2,12H5V20H19V12H22L12,3M12,8A3,3 0 0,1 15,11H13A1,1 0 0,0 12,10A1,1 0 0,0 11,11V13H16V17H8V13H9V11A3,3 0 0,1 12,8Z" fill="${color}"/></svg>