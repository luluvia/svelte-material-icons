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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18 20H14L18 4H22M16 4H12L8 20H12M2 16.5A2.5 2.5 0 0 0 4.5 19A2.5 2.5 0 0 0 7 16.5A2.5 2.5 0 0 0 4.5 14A2.5 2.5 0 0 0 2 16.5M2 9.5A2.5 2.5 0 0 0 4.5 12A2.5 2.5 0 0 0 7 9.5A2.5 2.5 0 0 0 4.5 7A2.5 2.5 0 0 0 2 9.5Z" fill="${color}"/></svg>