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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M10.25 15.15L11.92 12.47V15.15H10.25M21.92 21H2.08C1.24 21 .72 20.08 1.16 19.36L11.08 3.13C11.5 2.44 12.5 2.44 12.92 3.13L22.84 19.36C23.28 20.08 22.76 21 21.92 21M14.29 15.15H13.43V10.42H11.91L8.75 15.41L8.82 16.36H11.92V18H13.43V16.36H14.29V15.15Z" fill="${color}"/></svg>