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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M11.5 2H10.5V6.2C10.4 6.3 10.3 6.3 10.2 6.5L2.1 20.7C1.8 21.3 2.2 22 2.9 22H16V20H4.8L11 9.2L16.7 19.2L18.4 18.2L11.8 6.4L11.5 6.1V2M21 6H20V18L19.5 22H21.5L21 18V6Z" fill="${color}"/></svg>