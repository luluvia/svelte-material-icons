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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,7H9A2,2 0 0,1 11,9V15A2,2 0 0,1 9,17H5V15H9V13H6V11H9V9H5V7M13,7H16A3,3 0 0,1 19,10V14A3,3 0 0,1 16,17H13V7M16,15A1,1 0 0,0 17,14V10A1,1 0 0,0 16,9H15V15H16Z" fill="${color}"/></svg>