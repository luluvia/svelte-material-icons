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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11 4V3C11 2.45 11.45 2 12 2S13 2.45 13 3V4H11M13 9V5H11V9H9V15C9 16.3 9.84 17.4 11 17.82V22H13V17.82C14.16 17.4 15 16.3 15 15V9H13Z" fill="${color}"/></svg>