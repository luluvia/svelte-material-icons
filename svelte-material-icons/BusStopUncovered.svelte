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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M6 22V19H4V22H2V14A1 1 0 0 1 3 13A1 1 0 0 1 4 14V17H7A1 1 0 0 1 8 18V22M20 11V22H19V11A2.5 2.5 0 1 1 20 11M15 11.55V16H14V22H12.5V17H11.5V22H10V16H9V11.5A1.5 1.5 0 0 1 10.5 10H13.5A1.5 1.5 0 0 1 15 11.5M12 6.55A1.5 1.5 0 1 0 13.5 8A1.5 1.5 0 0 0 12 6.5Z" fill="${color}"/></svg>