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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,21H17C17.7,21 18.2,20.6 18.6,20.1L24,12L18.6,3.9C18.2,3.4 17.7,3 17,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21M5,8.4L6.4,7L10,10.6L13.6,7L15,8.4L11.4,12L15,15.6L13.6,17L10,13.4L6.4,17L5,15.6L8.6,12" fill="${color}"/></svg>