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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22,18A4,4 0 0,1 18,22H14A4,4 0 0,1 10,18V16H22V18M4,3H14A2,2 0 0,1 16,5V14H8V19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,6V8H6V6H4M14,8V6H8V8H14M4,10V12H6V10H4M8,10V12H14V10H8M4,14V16H6V14H4Z" fill="${color}"/></svg>