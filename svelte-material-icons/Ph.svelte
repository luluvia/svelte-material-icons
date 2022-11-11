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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M13 7V17H15V13H17V17H19V7H17V11H15V7H13M11 15V13C11 11.9 10.11 11 9 11H5V21H7V17H9C10.11 17 11 16.11 11 15M9 15H7V13H9V15Z" fill="${color}"/></svg>