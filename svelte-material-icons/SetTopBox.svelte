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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,15.5A0.5,0.5 0 0,1 4.5,16H3.5A0.5,0.5 0 0,1 3,15.5V15H2A1,1 0 0,1 1,14V11A1,1 0 0,1 2,10H22A1,1 0 0,1 23,11V14A1,1 0 0,1 22,15H21V15.5A0.5,0.5 0 0,1 20.5,16H19.5A0.5,0.5 0 0,1 19,15.5V15H5V15.5M3,12V13H5V12H3M6,12V13H8V12H6M20.5,11.5A1,1 0 0,0 19.5,12.5A1,1 0 0,0 20.5,13.5A1,1 0 0,0 21.5,12.5A1,1 0 0,0 20.5,11.5Z" fill="${color}"/></svg>