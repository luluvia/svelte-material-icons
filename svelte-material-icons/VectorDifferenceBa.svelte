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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M20,22C21.11,22 22,21.11 22,20V18H20V20H18V22H20M16,22V20H13V22H16M11,22V20H9V18H7V20C7,21.11 7.89,22 9,22H11M22,16V13H20V16H22M9,16C9,16 9,11.33 9,9C11.33,9 16,9 16,9C16,9 16,5 16,3C16,1.89 15.11,1 14,1H3C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16C5,16 9,16 9,16M7,14H3V3H14V7H9C7.89,7 7,7.89 7,9V14M22,11V9C22,7.89 21.11,7 20,7H18V9H20V11H22Z" fill="${color}"/></svg>