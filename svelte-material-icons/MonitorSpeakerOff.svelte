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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M23.1 22.5L1.4.7.1 2L1.2 3.1C1.1 3.4 1 3.7 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H12V16H3V4.9L14 15.9V21C14 21.6 14.5 22 15 22H20.1L21.8 23.7L23.1 22.5M18.5 21C16.6 21 15 19.4 15 17.5C15 17.3 15 17.1 15.1 16.9L16.1 17.9C16.3 18.9 17.1 19.7 18.1 19.9L19.1 20.9C18.9 21 18.7 21 18.5 21M21 17.5V17.8L18.2 15H18.5C19.9 15 21 16.1 21 17.5M23 19.8V10C23 9.4 22.5 9 22 9H15C14.4 9 14 9.5 14 10V10.8L17.4 14.2C17.7 14.1 18.1 14 18.5 14C20.4 14 22 15.6 22 17.5C22 17.9 21.9 18.3 21.8 18.6L23 19.8M18.5 13C17.7 13 17 12.3 17 11.5S17.7 10 18.5 10 20 10.7 20 11.5 19.3 13 18.5 13M7.2 4L5.2 2H21C22.1 2 23 2.9 23 4V8H21V4H7.2Z" fill="${color}"/></svg>