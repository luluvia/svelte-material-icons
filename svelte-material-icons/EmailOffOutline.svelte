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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22.1 21.5L2.4 1.7L1.1 3L2.6 4.5C2.3 4.9 2 5.4 2 6V18C2 19.1 2.9 20 4 20H18.1L20.8 22.7L22.1 21.5M4 18V8L9.6 11.5L16.1 18H4M9.2 6L7.2 4H20C21.1 4 22 4.9 22 6V18C22 18.2 22 18.5 21.9 18.7L20 16.8V8L14.6 11.4L13.4 10.2L20 6H9.2Z" fill="${color}"/></svg>