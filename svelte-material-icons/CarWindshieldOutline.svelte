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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22.63 15.5L20.21 5.85A1 1 0 0 0 19.14 5.1C17.8 5.24 14.14 5.5 12 5.5S6.2 5.24 4.86 5.1A1 1 0 0 0 3.79 5.85L1.37 15.5A1.5 1.5 0 0 0 2.55 17.36A61.5 61.5 0 0 0 12 18A61.5 61.5 0 0 0 21.45 17.36A1.5 1.5 0 0 0 22.63 15.5M12 16A63.33 63.33 0 0 1 3.44 15.5L5.5 7.18C7 7.32 10.16 7.5 12 7.5S17 7.32 18.5 7.18L20.56 15.5A63.33 63.33 0 0 1 12 16Z" fill="${color}"/></svg>