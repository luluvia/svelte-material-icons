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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12 19C8.1 19 5 15.9 5 12S8.1 5 12 5 19 8.1 19 12 15.9 19 12 19M19 6.4L20.5 5C20 4.5 19.5 4 19 3.6L17.6 5C16 3.7 14.1 3 12 3C7 3 3 7 3 12S7 21 12 21C17 21 21 17 21 12C21 9.9 20.3 7.9 19 6.4M11 13H13V7H11M15 0H9V2H15V0M13 22H11V24H13V22M17 22H15V24H17V22M9 22H7V24H9V22Z" fill="${color}"/></svg>