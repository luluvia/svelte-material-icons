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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21,18H24V20H21V23H19V20H16V18H19V15H21V18M19,8V6H3V8H19M19,12H3V18H14V20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H19A2,2 0 0,1 21,6V13H19V12Z" fill="${color}"/></svg>