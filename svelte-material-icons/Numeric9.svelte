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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M13,17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13M13,11H11V9H13V11Z" fill="${color}"/></svg>