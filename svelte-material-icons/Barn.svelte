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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M12,3L3,8.2V21H9L11.9,18L15,21H21V8.2L12,3M7.9,20V14L10.9,17L7.9,20M8.9,13H14.9L11.9,16L8.9,13M15.9,20L12.9,17L15.9,14V20M15,11H8.8V9H15V11Z" fill="${color}"/></svg>