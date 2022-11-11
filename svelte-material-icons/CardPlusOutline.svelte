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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21M14 18H3V6H19V13H21V6C21 4.89 20.11 4 19 4H3C1.9 4 1 4.89 1 6V18C1 19.11 1.9 20 3 20H14V18Z" fill="${color}"/></svg>