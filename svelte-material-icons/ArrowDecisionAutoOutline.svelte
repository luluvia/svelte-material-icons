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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19,15V12C18.5,12 14.5,12.16 14.05,16.2C15.61,16.75 16.43,18.47 15.88,20.03C15.33,21.59 13.61,22.41 12.05,21.86C10.5,21.3 9.67,19.59 10.22,18.03C10.5,17.17 11.2,16.5 12.05,16.2C12.34,12.61 15.4,9.88 19,10V7L23,11L19,15M14,19A1,1 0 0,0 13,18A1,1 0 0,0 12,19A1,1 0 0,0 13,20A1,1 0 0,0 14,19M12,11.12C12.58,10.46 13.25,9.89 14,9.43V5H17L13,1L9,5H12V11.12M7.2,6H5.2L2,15H3.9L4.6,13H7.8L8.5,15H10.4L7.2,6M5.05,11.65L6.2,8L7.35,11.65H5.05Z" fill="${color}"/></svg>