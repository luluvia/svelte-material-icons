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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M5.79 21.61L4.21 20.39L18.21 2.39L19.79 3.61L5.79 21.61M4 2V4H6V12H8V2H4M15 12V14H19V16H17C15.9 16 15 16.9 15 18V22H21V20H17V18H19C20.11 18 21 17.11 21 16V14C21 12.9 20.11 12 19 12H15Z" fill="${color}"/></svg>