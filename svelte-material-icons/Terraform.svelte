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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21 5.4V11.8L15.4 15V8.7L21 5.4M14.8 8.7V15L9.2 11.8V5.4L14.8 8.7M14.8 15.7V22.1L9.2 18.9V12.5L14.8 15.7M8.6 5.1V11.5L3 8.3V1.9L8.6 5.1Z" fill="${color}"/></svg>