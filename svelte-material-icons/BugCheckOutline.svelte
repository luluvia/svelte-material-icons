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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M18,7H15.19C14.74,6.2 14.12,5.5 13.37,5L15,3.41L13.59,2L11.42,4.17C10.96,4.06 10.5,4 10,4C9.5,4 9.05,4.06 8.59,4.17L6.41,2L5,3.41L6.62,5C5.87,5.5 5.26,6.21 4.81,7H2V9H4.09C4.03,9.33 4,9.66 4,10V11H2V13H4V14C4,14.34 4.03,14.67 4.09,15H2V17H4.81C6.26,19.5 9.28,20.61 12,19.65C12,19.43 12,19.22 12,19C12,18.43 12.09,17.86 12.25,17.31C11.59,17.76 10.8,18 10,18A4,4 0 0,1 6,14V10A4,4 0 0,1 10,6A4,4 0 0,1 14,10V14C14,14.19 14,14.39 13.95,14.58C14.54,14.04 15.24,13.62 16,13.35V13H18V11H16V10C16,9.66 15.97,9.33 15.91,9H18V7M21.34,16L17.75,19.59L16.16,18L15,19.16L17.75,22.16L22.5,17.41L21.34,16M12,9V11H8V9H12M12,13V15H8V13H12Z" fill="${color}"/></svg>