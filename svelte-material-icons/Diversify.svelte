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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19 2V4H12C10.9 4 10 4.89 10 6V9H12V6H19V8L22 5L19 2M19 9V11H14V13H19V15L22 12L19 9M11.05 10C9.94 10 9.04 10.87 9.03 12S9.9 14 11 14C12.11 14 13 13.11 13 12C13 10.91 12.13 10.03 11.05 10M2 11V13H8V11H2M10 15V18C10 19.11 10.9 20 12 20H19V22L22 19L19 16V18H12V15H10Z" fill="${color}"/></svg>