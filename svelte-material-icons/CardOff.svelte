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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M21.88 18.68L7.2 4H20C21.11 4 22 4.89 22 6V18C22 18.24 21.96 18.47 21.88 18.68M20.56 19.91L20.57 19.91L2.39 1.73L1.11 3L2.65 4.54C2.25 4.9 2 5.42 2 6V18C2 19.11 2.9 20 4 20H18.11L20.84 22.73L22.11 21.46L20.56 19.91Z" fill="${color}"/></svg>