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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M15,5A2,2 0 0,1 17,7V23L10,20L3,23V7C3,5.89 3.9,5 5,5H15M9,1H19A2,2 0 0,1 21,3V19L19,18.13V3H7A2,2 0 0,1 9,1Z" fill="${color}"/></svg>