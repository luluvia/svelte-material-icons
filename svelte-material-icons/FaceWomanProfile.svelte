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

<svg width="{width}" height="{height}" viewBox="{viewBox}" class="{$$props.class}" aria-hidden="{ariaHidden}">{#if title}<title>{title}</title>{/if}{#if desc}<desc>{desc}</desc>{/if}<path d="M17.25 13C17.25 13.69 16.69 14.25 16 14.25S14.75 13.69 14.75 13 15.31 11.75 16 11.75 17.25 12.31 17.25 13M22 12C22 17.5 17.5 22 12 22H2V12C2 6.5 6.5 2 12 2S22 6.5 22 12M7 18C8.41 19.23 10 20 12 20C16.41 20 20 16.41 20 12C20 11.21 19.88 10.45 19.67 9.74C18.95 9.91 18.2 10 17.42 10C15.42 10 13.57 9.4 12 8.39C12 8.39 10.54 13.76 8.03 13C7.37 12.8 7 13.31 7 14" fill="${color}"/></svg>