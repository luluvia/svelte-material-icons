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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10A4,4 0 0,1 10,14H12C12,11.24 10.14,8.92 7.6,8.22C8.61,6.88 10.2,6 12,6C15.03,6 17.5,8.47 17.5,11.5V12H19A3,3 0 0,1 22,15A3,3 0 0,1 19,18M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.61,5.64 5.36,8.04C2.35,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z" fill="${color}"/></svg>