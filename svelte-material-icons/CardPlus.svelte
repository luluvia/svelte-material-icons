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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H20C21.11 4 22 4.89 22 6V13.81C21.12 13.3 20.09 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" fill="${color}"/></svg>