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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M23.05,11H20.05V4L15.05,14H18.05V22M12.05,17H4.05V6H12.05M12.72,4H11.05V2H5.05V4H3.38A1.33,1.33 0 0,0 2.05,5.33V20.67C2.05,21.4 2.65,22 3.38,22H12.72C13.45,22 14.05,21.4 14.05,20.67V5.33A1.33,1.33 0 0,0 12.72,4Z" fill="${color}"/></svg>