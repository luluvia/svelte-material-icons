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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21 13L19 15V13H17V15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5L3 5H2V11H3L5 9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H17V19H19V17L21 19H22V13M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9Z" fill="${color}"/></svg>