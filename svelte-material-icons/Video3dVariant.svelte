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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14,10V14A0.5,0.5 0 0,1 13.5,14.5H12.5V9.5H13.5A0.5,0.5 0 0,1 14,10M21,6.5V17.5L17,13.5V17A1,1 0 0,1 16,18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H16A1,1 0 0,1 17,7V10.5M9.5,9.5A1.5,1.5 0 0,0 8,8H4.5V9.5H8V11.25H5.5V12.75H8V14.5H4.5V16H8A1.5,1.5 0 0,0 9.5,14.5M15.5,9.5A1.5,1.5 0 0,0 14,8H11V16H14A1.5,1.5 0 0,0 15.5,14.5" fill="${color}"/></svg>