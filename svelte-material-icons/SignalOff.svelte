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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18,3V16.18L21,19.18V3H18M4.28,5L3,6.27L10.73,14H8V21H11V14.27L13,16.27V21H16V19.27L19.73,23L21,21.72L4.28,5M13,9V11.18L16,14.18V9H13M3,18V21H6V18H3Z" fill="${color}"/></svg>