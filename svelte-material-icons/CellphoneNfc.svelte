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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,16V18A5,5 0 0,1 7,23H9A7,7 0 0,0 2,16M2,20V23H5A3,3 0 0,0 2,20M2,12V14A9,9 0 0,1 11,23H13C13,16.92 8.08,12 2,12M17,1H7A2,2 0 0,0 5,3V10.37C5.69,10.53 6.36,10.74 7,11V5H17V18H13.97C14.5,19.25 14.81,20.59 14.92,22H17A2,2 0 0,0 19,20V3A2,2 0 0,0 17,1Z" fill="${color}"/></svg>