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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1 3V21H23V3H1M21 5V14H3V5H21M11 16V19H8V16H11M3 16H6V19H3V16M13 19V16H16V19H13M18 19V16H21V19H18Z" fill="${color}"/></svg>