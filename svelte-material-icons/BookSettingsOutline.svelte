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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18 0H6C4.89 0 4 .895 4 2V18C4 19.11 4.89 20 6 20H18C19.11 20 20 19.11 20 18V2C20 .895 19.11 0 18 0M18 18H6V2H8V10L10.5 7.75L13 10V2H18V18M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22Z" fill="${color}"/></svg>