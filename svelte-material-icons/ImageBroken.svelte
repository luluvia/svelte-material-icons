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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M19,3A2,2 0 0,1 21,5V11H19V13H19L17,13V15H15V17H13V19H11V21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19M21,15V19A2,2 0 0,1 19,21H19L15,21V19H17V17H19V15H21M19,8.5A0.5,0.5 0 0,0 18.5,8H5.5A0.5,0.5 0 0,0 5,8.5V15.5A0.5,0.5 0 0,0 5.5,16H11V15H13V13H15V11H17V9H19V8.5Z" fill="${color}"/></svg>