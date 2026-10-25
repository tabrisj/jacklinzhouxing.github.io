<script>
  import { Menu, X } from '@lucide/svelte';

  let mobileOpen = $state(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'News', href: '#news' },
    { label: 'Research', href: '#research' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'CV', href: '#cv' },
    { label: 'Contact', href: '#contact' }
  ];
</script>

<nav class="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-border">
  <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
    <a href="#home" class="font-serif-display text-lg font-semibold text-foreground whitespace-nowrap">
      Jack Linzhou Xing
    </a>

    <div class="hidden md:flex gap-5 text-[13px] lg:text-sm font-medium text-muted-foreground tracking-wide">
      {#each navItems as item (item.label)}
        <a href={item.href} class="hover:text-primary transition-colors duration-200">{item.label}</a>
      {/each}
    </div>

    <button
      class="md:hidden text-foreground"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
    >
      {#if mobileOpen}<X size={20} />{:else}<Menu size={20} />{/if}
    </button>
  </div>

  {#if mobileOpen}
    <div class="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
      {#each navItems as item (item.label)}
        <a
          href={item.href}
          class="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          onclick={() => (mobileOpen = false)}
        >
          {item.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
