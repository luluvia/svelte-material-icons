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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22.11,21.46L2.39,1.73L1.11,3L5.83,7.72C5.29,8.73 5,9.86 5,11V17L3,19V20H18.11L20.84,22.73L22.11,21.46M7,18V11C7,10.39 7.11,9.79 7.34,9.23L16.11,18H7M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M8.29,5.09C8.82,4.75 9.4,4.5 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V15.8L17,13.8V11A5,5 0 0,0 12,6C11.22,6 10.45,6.2 9.76,6.56L8.29,5.09Z" fill="${color}"/></svg>