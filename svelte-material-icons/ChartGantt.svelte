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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,5H10V2H12V22H10V18H6V15H10V13H4V10H10V8H2V5M14,5H17V8H14V5M14,10H19V13H14V10M14,15H22V18H14V15Z" fill="${color}"/></svg>