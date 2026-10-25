<script>
  import { ArrowLeft } from '@lucide/svelte';
  import { reveal } from './reveal.js';

  let { icon: Icon, title, narrative, publications } = $props();
</script>

<div class="min-h-screen bg-background text-foreground">
  <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div class="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
      <a
        href="/"
        class="font-serif-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
      >
        Jack Linzhou Xing 邢麟舟
      </a>
      <a
        href="/#research"
        class="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={14} />
        Back to Home
      </a>
    </div>
  </header>

  <main class="max-w-3xl mx-auto px-6 py-16">
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
