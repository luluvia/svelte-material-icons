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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20,8H22V10H20V8M4,5H20A2,2 0 0,1 22,7H19V9H5V13H8V16H19V17H22A2,2 0 0,1 20,19H16V20H14V19H11V20H7V19H4A2,2 0 0,1 2,17V7A2,2 0 0,1 4,5M19,15H9V10H19V11H22V13H19V15M13,12V14H15V12H13M5,6V8H6V6H5M7,6V8H8V6H7M9,6V8H10V6H9M11,6V8H12V6H11M13,6V8H14V6H13M15,6V8H16V6H15M20,14H22V16H20V14Z" fill="${color}"/></svg>