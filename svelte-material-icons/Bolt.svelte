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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14,17.7V21H10V20.3L14,17.7M17,3H7V6H17V3M15,7L14,7.7V7H10V10.3L9,11V12L15,8.1V7M15,11L14,11.7V9.7L10,12.4V14.4L9,15V16L15,12.1V11M15,15L14,15.7V13.7L10,16.4V18.4L9,19V20L15,16.1V15Z" fill="${color}"/></svg>