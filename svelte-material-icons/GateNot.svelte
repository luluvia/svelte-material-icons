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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M2,4V20L16.2,13C16.62,14.19 17.74,15 19,15A3,3 0 0,0 22,12A3,3 0 0,0 19,9C17.74,9 16.62,9.81 16.2,11L2,4M4,7.3L13.7,12L4,16.7V7.3M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13A1,1 0 0,1 18,12C18,11.5 18.5,11 19,11Z" fill="${color}"/></svg>