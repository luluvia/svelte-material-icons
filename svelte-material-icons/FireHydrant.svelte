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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5 15V14H4V12H5V11H7V15H5M19 12V11H17V15H19V14H20V12H19M18 6H15.86C15.5 4.6 14.4 3.5 13 3.14V2H11V3.14C9.6 3.5 8.5 4.6 8.14 6H6V8H18V6M18 22H6C6 20.9 6.9 20 8 20V9H16V20C17.11 20 18 20.9 18 22M10 13C10 14.11 10.9 15 12 15S14 14.11 14 13 13.11 11 12 11 10 11.9 10 13Z" fill="${color}"/></svg>