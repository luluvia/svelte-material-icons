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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M8.17,8.58L10.59,11L8.17,13.41L9.59,14.83L12,12.41L14.41,14.83L15.83,13.41L13.41,11L15.83,8.58L14.41,7.17L12,9.58L9.59,7.17L8.17,8.58Z" fill="${color}"/></svg>