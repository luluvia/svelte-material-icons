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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M7,2L5,5V16L6,20C6.27,21.07 6.9,22 8,22H16A2,2 0 0,0 18,20L19,16V5L17,2H15V3H13V2H7M7,6H17V16H7V6Z" fill="${color}"/></svg>