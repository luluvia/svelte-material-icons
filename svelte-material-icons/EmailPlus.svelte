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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M3,4C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H14.09C14.03,19.67 14,19.34 14,19A6,6 0 0,1 20,13C20.34,13 20.67,13.03 21,13.09V6C21,4.89 20.1,4 19,4H3M3,6L11,11L19,6V8L11,13L3,8V6M19,15V18H16V20H19V23H21V20H24V18H21V15H19Z" fill="${color}"/></svg>