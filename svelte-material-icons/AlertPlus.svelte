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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14 19C14 16.21 15.91 13.87 18.5 13.2L12 2L1 21H14.35C14.13 20.37 14 19.7 14 19M13 18H11V16H13V18M13 14H11V10H13V14M21 15V18H24V20H21V23H19V20H16V18H19V15H21Z" fill="${color}"/></svg>