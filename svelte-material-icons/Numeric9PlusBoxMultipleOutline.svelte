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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21,9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M11,9V8H12V9M14,12V8C14,6.89 13.1,6 12,6H11A2,2 0 0,0 9,8V9C9,10.11 9.9,11 11,11H12V12H9V14H12A2,2 0 0,0 14,12M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z" fill="${color}"/></svg>