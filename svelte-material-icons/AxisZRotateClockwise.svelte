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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14,12L10,16L14,20V16.9C18.56,16.44 22,14.42 22,12C22,9.58 18.56,7.56 14,7.1V9.09C17.45,9.43 20,10.6 20,12C20,13.4 17.45,14.57 14,14.91V12M4,12C4,10.6 6.55,9.43 10,9.09V7.1C5.44,7.56 2,9.58 2,12C2,14.16 4.74,16 8.58,16.7L7.88,16L9.08,14.79C6.11,14.36 4,13.27 4,12M13,2H11V13L13,11V2M13,22V21L11,19V22H13Z" fill="${color}"/></svg>