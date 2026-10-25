<script>
  // Xiaohongshu (RED) has no mark in Lucide 1.x. This is the app badge itself:
  // rounded square in the platform's red with the wordmark in white. It reads as
  // a small red app icon at 18px, which is the point — the label beside it
  // carries the meaning.
  let { size = 24, class: cls = '' } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  class={cls}
  aria-hidden="true"
>
  <rect x="1" y="1" width="22" height="22" rx="6" fill="#FF2442" />
  <text
    x="12"
    y="12.4"
    text-anchor="middle"
    dominant-baseline="middle"
    fill="#FFFFFF"
    font-family="-apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    font-size="7.2"
    font-weight="600"
    letter-spacing="0.2"
  >
    小红书
  </text>
</svg>
