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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19,16A3,3 0 0,0 22,13A3,3 0 0,0 19,10H17.5V9.5A5.5,5.5 0 0,0 12,4C9.5,4 7.37,5.69 6.71,8H6A4,4 0 0,0 2,12A4,4 0 0,0 6,16V11H18V16H19M19.36,8.04C21.95,8.22 24,10.36 24,13A5,5 0 0,1 19,18H18V22H6V18A6,6 0 0,1 0,12C0,8.91 2.34,6.36 5.35,6.04C6.6,3.64 9.11,2 12,2C15.64,2 18.67,4.6 19.36,8.04M8,13V20H16V13H8M9,18H15V19H9V18M15,17H9V16H15V17M9,14H15V15H9V14Z" fill="${color}"/></svg>