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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,20H16V22H5M11,5H10A2,2 0 0,0 8,7H13A2,2 0 0,0 11,5M16,8H22A2,2 0 0,1 20,10H19A4,4 0 0,0 15,14V15A4,4 0 0,1 11,19H10A4,4 0 0,1 6,15H4A2,2 0 0,1 2,13V10A2,2 0 0,1 4,8M6,10H4V13H6M19,5A2,2 0 0,1 21,7H22A2.9,2.9 0 0,0 19,4A2,2 0 0,1 17,2H16A2.9,2.9 0 0,0 19,5" fill="${color}"/></svg>