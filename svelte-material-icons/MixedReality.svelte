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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3M8.25,15H9.75L10.75,11.57V15H12.25V9H10L9,12.43L8,9H5.75V15H7.25V11.57L8.25,15M13.5,9V15H15V13H16.15L17,15H18.5L17.6,12.9C18.1,12.65 18.5,12.1 18.5,11.5V10.5C18.5,9.65 17.85,9 17,9H13.5M15,10.5H17V11.5H15V10.5Z" fill="${color}"/></svg>