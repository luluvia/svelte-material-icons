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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1,4.27L2.28,3L21,21.72L19.73,23L18.27,21.54C17.93,21.83 17.5,22 17,22H7C5.97,22 5.13,21.23 5,20.23L3.53,6.8L1,4.27M18.32,8L18.77,4H5.82L3.82,2H21L19.29,17.47L9.82,8H18.32Z" fill="${color}"/></svg>