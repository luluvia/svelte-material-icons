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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M4,6A2,2 0 0,0 2,8V16A2,2 0 0,0 4,18H20A2,2 0 0,0 22,16V8A2,2 0 0,0 20,6H4M4.54,10H7V14H4.54C4.19,13.39 4,12.7 4,12C4,11.3 4.19,10.61 4.54,10M9,10H15V14H9V10M17,10H19.46C19.81,10.61 20,11.3 20,12C20,12.7 19.81,13.39 19.46,14H17V10Z" fill="${color}"/></svg>