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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11,12H8.82C9.62,12.5 10.35,13.07 11,13.68V12M7,11C7.27,5.88 9.37,2 12,2C14.66,2 16.77,5.94 17,11.12C18.5,10.43 20.17,10 22,10C16.25,12.57 18.25,22 12,22C6,22 7.93,12.57 2,10C3.82,10 5.5,10.4 7,11M11,11V9H8.24L8.03,11H11M11,8V6H9.05C8.8,6.6 8.6,7.27 8.43,8H11M11,5V3.3C10.45,3.63 9.95,4.22 9.5,5H11M12,3V5H13V6H12V8H14V9H12V11H15V12H12V14H14V15H12.23C13.42,16.45 14.15,18 14.32,19.23C15.31,17.56 15.96,14.84 16,11.76C15.94,7 14.13,3 12,3Z" fill="${color}"/></svg>