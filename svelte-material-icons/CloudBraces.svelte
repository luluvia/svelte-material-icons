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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6,20A6,6 0 0,1 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.63,4 18.66,6.58 19.35,10C21.95,10.19 24,12.36 24,15A5,5 0 0,1 19,20H6M18.5,12H18A1,1 0 0,1 17,11V10A2,2 0 0,0 15,8H13.5V10H15V11A2,2 0 0,0 17,13A2,2 0 0,0 15,15V16H13.5V18H15A2,2 0 0,0 17,16V15A1,1 0 0,1 18,14H18.5V12M5.5,12V14H6A1,1 0 0,1 7,15V16A2,2 0 0,0 9,18H10.5V16H9V15A2,2 0 0,0 7,13A2,2 0 0,0 9,11V10H10.5V8H9A2,2 0 0,0 7,10V11A1,1 0 0,1 6,12H5.5Z" fill="${color}"/></svg>