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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4 3C2.9 3 2 3.9 2 5V8H22V5C22 3.9 21.11 3 20 3H4M10 5H14V6H10V5M2 9V14H22V9H2M10 11H14V12H10V11M2 15V18C2 19.11 2.9 20 4 20V21H6V20H18V21H20V20C21.11 20 22 19.11 22 18V15H2M10 17H14V18H10V17Z" fill="${color}"/></svg>