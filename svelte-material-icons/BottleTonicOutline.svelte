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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M13 4H11L10 2H14L13 4M19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13M17 13C17 11.35 15.65 10 14 10H10C8.35 10 7 11.35 7 13V20H17V13Z" fill="${color}"/></svg>