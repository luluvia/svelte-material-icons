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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M10.5,5A8.5,8.5 0 0,0 2,13.5A8.5,8.5 0 0,0 10.5,22A8.5,8.5 0 0,0 19,13.5A8.5,8.5 0 0,0 10.5,5M13.5,13A2.5,2.5 0 0,1 11,10.5A2.5,2.5 0 0,1 13.5,8A2.5,2.5 0 0,1 16,10.5A2.5,2.5 0 0,1 13.5,13M19.5,2A2.5,2.5 0 0,0 17,4.5A2.5,2.5 0 0,0 19.5,7A2.5,2.5 0 0,0 22,4.5A2.5,2.5 0 0,0 19.5,2" fill="${color}"/></svg>