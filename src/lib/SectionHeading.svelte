<script>
  import { reveal } from './reveal.js';

  // One heading pattern for every section: theme icon, Playfair title, crimson
  // rule under the title. Before this, Teaching had an icon but no rule while
  // every other section had a rule but no icon, so the titles sat on two
  // different left edges.
  let { icon: Icon, title } = $props();
</script>

<div use:reveal class="mb-8 flex items-start gap-2.5">
  <Icon size={20} class="text-primary shrink-0 mt-1.5" aria-hidden="true" />
  <div class="min-w-0">
    <h2 class="text-2xl md:text-3xl font-serif-display font-semibold text-foreground">{title}</h2>
    <div class="w-12 h-px bg-primary/40 mt-3"></div>
  </div>
</div>
