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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M23 16V15.5A2.5 2.5 0 0 0 18 15.5V16A1 1 0 0 0 17 17V21A1 1 0 0 0 18 22H23A1 1 0 0 0 24 21V17A1 1 0 0 0 23 16M22 16H19V15.5A1.5 1.5 0 0 1 22 15.5M7 8.9H11V7H7A5 5 0 0 0 7 17H11V15.1H7A3.1 3.1 0 0 1 7 8.9M8 11V13H16V11M13 15.1V17H15V15.1M17 7H13V8.9H17A3.09 3.09 0 0 1 19.94 11A5.12 5.12 0 0 1 20.5 11H21.9A5 5 0 0 0 17 7Z" fill="${color}"/></svg>