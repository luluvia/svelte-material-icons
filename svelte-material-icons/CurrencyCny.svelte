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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z" fill="${color}"/></svg>