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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H20A2,2 0 0,1 22,6V12.1C23.24,13.36 24,15.09 24,17M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12M20,10V7H4V10H20Z" fill="${color}"/></svg>