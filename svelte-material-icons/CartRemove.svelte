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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M14.12,8.53L12,6.41L9.88,8.54L8.46,7.12L10.59,5L8.47,2.88L9.88,1.47L12,3.59L14.12,1.46L15.54,2.88L13.41,5L15.53,7.12L14.12,8.53M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22A2,2 0 0,1 5,20A2,2 0 0,1 7,18M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22A2,2 0 0,1 15,20A2,2 0 0,1 17,18M7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7A2,2 0 0,1 5,15C5,14.65 5.09,14.32 5.25,14.04L6.6,11.59L3,4H1V2H4.27L5.21,4L6.16,6L8.4,10.73L8.53,11H15.55L18.31,6L19.41,4H19.42L21.16,4.96L17.3,11.97C16.96,12.59 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75Z" fill="${color}"/></svg>