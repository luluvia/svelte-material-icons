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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20,20.72L18.73,22L16.78,20.05L12,18L5,21V8.27L2,5.27L3.28,4L20,20.72M19,17.16V5C19,3.89 18.1,3 17,3H7C6.41,3 5.89,3.27 5.5,3.68L19,17.16Z" fill="${color}"/></svg>