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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,5.27L3.28,4L20,20.72L18.73,22L15,18.27V22H9V12.27L2,5.27M18,5L15,10H11.82L6.82,5H18M18,4H6V2H18V4M15,11V13.18L12.82,11H15Z" fill="${color}"/></svg>