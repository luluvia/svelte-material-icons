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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,18H9V6.13C7.27,6.57 6,8.14 6,10V11H8V17H6A2,2 0 0,1 4,15V10A6,6 0 0,1 10,4H11A6,6 0 0,1 17,10V12H18V9H20V12A2,2 0 0,1 18,14H17V15A2,2 0 0,1 15,17H13V11H15V10C15,8.14 13.73,6.57 12,6.13V18H22V20H2V18Z" fill="${color}"/></svg>