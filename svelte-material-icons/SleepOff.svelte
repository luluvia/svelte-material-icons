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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,5.27L3.28,4L20,20.72L18.73,22L12.73,16H9V14L9.79,13.06L2,5.27M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M9.82,8H15V10L13.54,11.72L9.82,8M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z" fill="${color}"/></svg>