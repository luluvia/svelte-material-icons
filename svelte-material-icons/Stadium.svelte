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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22 13.5V17.5C22 19.2 17.5 20.5 12 20.5C10.6 20.5 9.2 20.4 8 20.2V17.5L4 16.5V19.3C2.7 18.8 2 18.2 2 17.5V11.5C2 10.5 4 9.5 6 9.5C12 9.5 14 15 19 15C21 15 22 13.5 22 13.5M5 8L9 9V6L5 5V8M18 6.5L22 7.5V4.5L18 3.5V6.5M22.3 10.8C22.3 9.8 21.5 8 18.7 8S13.4 10.7 13.3 10.9C15.1 12.2 16.5 13.5 19 13.5C22.3 13.5 22.3 10.8 22.3 10.8Z" fill="${color}"/></svg>