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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M22,22H2V20H22V22M2.26,16.83L5.09,14L2.26,11.17L3.67,9.76L6.5,12.59L9.33,9.76L10.74,11.17L7.91,14L10.74,16.83L9.33,18.24L6.5,15.41L3.67,18.24L2.26,16.83Z" fill="${color}"/></svg>