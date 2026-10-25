<script>
  import { Menu, X } from '@lucide/svelte';

  let mobileOpen = $state(false);
  let activeId = $state('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'publications', label: 'Publications' },
    { id: 'news', label: 'News' },
    { id: 'research', label: 'Research' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' }
  ];

  // Track which section owns the viewport so the nav can show a current state.
  $effect(() => {
    const targets = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el) => el !== null);
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) activeId = visible[0].target.id;
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: 0 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  // Escape closes the mobile sheet and returns focus to the toggle.
  function onKeydown(event) {
    if (event.key !== 'Escape' || !mobileOpen) return;
    mobileOpen = false;
    document.getElementById('nav-toggle')?.focus();
  }

  // Eight items plus the wordmark have to fit a 720px column at lg, so the
  // pills run tighter than they would on a full-width bar.
  const linkBase =
    'rounded-full px-2 py-2 text-caption font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';
  const linkRest = 'text-muted-foreground hover:bg-secondary hover:text-foreground';
  const linkActive = 'bg-primary/10 text-primary';
</script>

<svelte:window onkeydown={onKeydown} />

<nav class="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-border">
  <div class="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
    <a
      href="#home"
      class="font-serif-display text-lg font-semibold text-foreground whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      Jack Linzhou Xing
    </a>

    <div class="hidden lg:flex items-center gap-1">
      {#each navItems as item (item.id)}
        <a
          href="#{item.id}"
          aria-current={activeId === item.id ? 'true' : undefined}
          class="{linkBase} {activeId === item.id ? linkActive : linkRest}"
        >
          {item.label}
        </a>
      {/each}
    </div>

    <button
      id="nav-toggle"
      class="lg:hidden -mr-2 p-2 rounded-full text-foreground hover:bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={mobileOpen}
      aria-controls="mobile-menu"
    >
      {#if mobileOpen}<X size={20} />{:else}<Menu size={20} />{/if}
    </button>
  </div>

  {#if mobileOpen}
    <div id="mobile-menu" class="lg:hidden border-t border-border bg-background px-4 py-3">
      <div class="max-w-3xl mx-auto flex flex-col gap-1">
        {#each navItems as item (item.id)}
          <a
            href="#{item.id}"
            aria-current={activeId === item.id ? 'true' : undefined}
            class="block px-3 py-2.5 rounded-md text-body-sm font-medium transition-colors duration-150 {activeId ===
            item.id
              ? 'bg-primary/10 text-primary'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}"
            onclick={() => (mobileOpen = false)}
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
