<script>
  import { ArrowUp } from '@lucide/svelte';
  import { fade, scale } from 'svelte/transition';

  let visible = $state(false);

  $effect(() => {
    const onScroll = () => (visible = window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

{#if visible}
  <button
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    class="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:opacity-80 transition-opacity duration-200 md:bottom-8 md:right-8"
    aria-label="Back to top"
  >
    <ArrowUp size={18} />
  </button>
{/if}
