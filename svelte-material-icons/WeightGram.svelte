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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7A4,4 0 0,0 12,3A4,4 0 0,0 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z" fill="${color}"/></svg>