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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11,13H13V15H11V13M11,9H13V11H11V9M11,17H13A2,2 0 0,0 15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H11A2,2 0 0,0 9,9V10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 9,13.5V15C9,16.11 9.9,17 11,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" fill="${color}"/></svg>