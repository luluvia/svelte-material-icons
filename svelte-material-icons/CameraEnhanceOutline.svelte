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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,10L11.06,12.06L9,13L11.06,13.94L12,16L12.94,13.94L15,13L12.94,12.06L12,10M20,5H16.83L15,3H9L7.17,5H4A2,2 0 0,0 2,7V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7A2,2 0 0,0 20,5M20,19H4V7H8.05L8.64,6.35L9.88,5H14.12L15.36,6.35L15.95,7H20V19M12,8A5,5 0 0,0 7,13A5,5 0 0,0 12,18A5,5 0 0,0 17,13A5,5 0 0,0 12,8M12,16A3,3 0 0,1 9,13A3,3 0 0,1 12,10A3,3 0 0,1 15,13A3,3 0 0,1 12,16Z" fill="${color}"/></svg>