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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M16.76 13L18.76 17H9.24L11.24 13H16.76M15 6H13V11H10L6 19H22L18 11H15V6M16 20C16 21.11 15.11 22 14 22S12 21.11 12 20H16M8.21 10.11L8.76 9H11V2H9V7H6L2 15H5.76L8.21 10.11Z" fill="${color}"/></svg>