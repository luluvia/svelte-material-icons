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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M3,1C1.89,1 1,1.89 1,3V17C1,18.11 1.89,19 3,19H14V17H12V13H16.68C17.5,12.35 18.47,12 19.5,12C20,12 20.5,12.09 21,12.26V3C21,1.89 20.11,1 19,1H3M3,3H19V11H3V3M3,13H10V17H3V13M19.5,14A2.5,2.5 0 0,0 17,16.5V17A1,1 0 0,0 16,18V22A1,1 0 0,0 17,23H22A1,1 0 0,0 23,22V18A1,1 0 0,0 22,17V16.5A2.5,2.5 0 0,0 19.5,14M19.5,15A1.5,1.5 0 0,1 21,16.5V17H18V16.5A1.5,1.5 0 0,1 19.5,15Z" fill="${color}"/></svg>