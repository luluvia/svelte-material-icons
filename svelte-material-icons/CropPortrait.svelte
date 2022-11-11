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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M17,19H7V5H17M17,3H7A2,2 0 0,0 5,5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z" fill="${color}"/></svg>