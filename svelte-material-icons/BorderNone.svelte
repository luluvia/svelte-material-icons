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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M15,5H17V3H15M15,13H17V11H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M11,9H13V7H11M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M11,13H13V11H11M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M11,17H13V15H11M7,21H9V19H7M7,13H9V11H7M7,5H9V3H7V5Z" fill="${color}"/></svg>