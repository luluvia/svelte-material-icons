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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2.81,8.46L14.83,20.5L15.54,19.78L16.95,21.19L18.36,19.78L16.95,18.36L18.36,16.95L19.78,18.36L21.19,16.95L19.78,15.54L20.5,14.83L8.46,2.81L2.81,8.46M5.64,8.46L8.46,5.64L17.66,14.83L14.83,17.66L5.64,8.46M7.05,8.46L8.46,9.88L9.88,8.46L8.46,7.05L7.05,8.46M9.17,10.59L10.59,12L12,10.59L10.59,9.17L9.17,10.59M11.29,12.71L12.71,14.12L14.12,12.71L12.71,11.29L11.29,12.71M13.41,14.83L14.83,16.24L16.24,14.83L14.83,13.41L13.41,14.83Z" fill="${color}"/></svg>