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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5,15.5L7.5,20H2.5L5,15.5M9,19H21V17H9V19M5,9.5L7.5,14H2.5L5,9.5M9,13H21V11H9V13M5,3.5L7.5,8H2.5L5,3.5M9,7H21V5H9V7Z" fill="${color}"/></svg>