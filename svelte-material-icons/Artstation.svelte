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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M1.77,16.88L3.5,19.86C3.84,20.54 4.54,21 5.33,21H16.79L14.43,16.88H1.77M22.23,16.9C22.23,16.5 22.11,16.11 21.9,15.78L15.17,4.1C14.82,3.44 14.15,3 13.35,3H9.8L20.18,21L21.82,18.14C22.13,17.6 22.23,17.36 22.23,16.9M12.73,13.94L8.1,5.92L3.45,13.94H12.73Z" fill="${color}"/></svg>