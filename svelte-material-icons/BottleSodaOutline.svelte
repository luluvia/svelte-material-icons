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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.4 9.58C12.9 7.89 13 4 13 4H14V2H10V4H11S11.1 7.89 9.6 9.58A2 2 0 0 0 9 11V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V11A2 2 0 0 0 14.4 9.58M13 20H11V11L11.1 10.91A6.26 6.26 0 0 0 12 9.5A6.26 6.26 0 0 0 12.9 10.91L13 11Z" fill="${color}"/></svg>