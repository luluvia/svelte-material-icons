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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12 3L4 21H20L12 3M9 19H7.08L9 14.67V19M13 19H11V14H13V19M10.19 12L12 7.92L13.81 12H10.19M15 14.67L16.92 19H15V14.67Z" fill="${color}"/></svg>