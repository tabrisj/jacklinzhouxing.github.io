<script>
  import { ArrowLeft } from '@lucide/svelte';
  import { reveal } from './reveal.js';
  import Navbar from './Navbar.svelte';

  let { icon: Icon, title, narrative, publications } = $props();
</script>

<div class="min-h-screen bg-background text-foreground">
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-body-sm focus:font-medium focus:text-primary-foreground"
  >
    Skip to content
  </a>

  <Navbar base="/" spy={false} />

  <main id="main-content" class="max-w-3xl mx-auto px-6 py-16">
    <a
      href="/#research"
      class="inline-flex items-center gap-1.5 text-caption text-muted-foreground hover:text-primary transition-colors mb-8 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowLeft size={14} />
      Back to Research
    </a>

    <div use:reveal>
      <div class="flex items-center gap-3 mb-6">
        <Icon size={24} class="text-primary" />
        <h1 class="text-2xl md:text-3xl font-serif-display font-semibold">{title}</h1>
      </div>
      <div class="w-12 h-px bg-primary/40 mb-8"></div>
    </div>

    <p use:reveal={{ delay: 100 }} class="text-body text-foreground/80 leading-relaxed mb-12 measure">
      {narrative}
    </p>

    <div use:reveal={{ delay: 200 }}>
      <h2 class="text-lg font-serif-display font-semibold text-foreground mb-6">Publications</h2>
      <ul class="space-y-4">
        {#each publications as pub (pub.title)}
          <li class="border-l-2 border-primary/20 pl-4">
            <span class="text-xs font-medium text-primary">{pub.year}</span>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              class="block text-sm text-foreground hover:text-primary transition-colors leading-relaxed mt-0.5"
            >
              {pub.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </main>
</div>
