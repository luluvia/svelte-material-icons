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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11 11V7H13V11H11M13 1V5H11V1H13M11 17V13H13V17H11M9 20H6V4H9V2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H9V20M15 3V8H18V20H15V22H18C19.11 22 20 21.11 20 20V8L15 3M13 19H11V23H13V19Z" fill="${color}"/></svg>