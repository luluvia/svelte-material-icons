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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12.9 4.22C18.73 6.84 20 2 20 2S18.89 8.07 13.79 10.55C12.75 11.06 12.1 11.33 12.1 11.33L3.73 7.25L12.1 3.82C12.1 3.82 11.9 3.76 12.9 4.22M11.12 22L3.33 17.78V9.07L11.12 13.04V22M12.88 22L20.68 17.78V9.07L12.88 13.04V22Z" fill="${color}"/></svg>