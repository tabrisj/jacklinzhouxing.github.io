<script>
  import { Mail, MapPin, Send, Check, GraduationCap, BookOpen } from '@lucide/svelte';
  import { tick } from 'svelte';
  import BrandLinkedin from './BrandLinkedin.svelte';
  import BrandX from './BrandX.svelte';
  import { reveal } from './reveal.js';

  let sent = $state(false);
  let submitting = $state(false);
  let errorMsg = $state('');
  let errorEl = $state(null);

  const socialLinks = [
    { icon: BrandLinkedin, label: 'Jack Linzhou Xing', href: 'https://www.linkedin.com/in/jacklinzhouxing/' },
    { icon: BrandX, label: '@XingJLZ', href: 'https://x.com/XingJLZ' },
    { icon: GraduationCap, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=nqQte2oAAAAJ&hl=en&oi=ao' },
    { icon: BookOpen, label: '边缘学术人', href: null }
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    submitting = true;
    errorMsg = '';
    const form = event.currentTarget;

    try {
      const res = await fetch('https://formspree.io/f/mpqooyev', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        sent = true;
        form.reset();
      } else {
        // Formspree rate-limits and rejects; say so instead of pretending it worked.
        errorMsg =
          'Your message did not send. Please try again in a moment, or email me directly at xinglz@ust.hk.';
      }
    } catch {
      errorMsg =
        'Your message did not send — the connection failed. Please check your network and try again, or email me directly at xinglz@ust.hk.';
    } finally {
      submitting = false;
    }

    // Move focus to the alert so a screen reader announces it and sighted
    // keyboard users land on the explanation rather than back at the top.
    if (errorMsg) {
      await tick();
      errorEl?.focus();
    }
  }
</script>

<section id="contact" class="py-20 md:py-24 border-t border-border scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-2xl md:text-3xl font-serif-display font-semibold text-foreground mb-2">Contact</h2>
      <div class="w-12 h-px bg-primary/40 mb-10"></div>
    </div>

    <div use:reveal={{ delay: 100 }} class="grid md:grid-cols-2 gap-12">
      <div class="space-y-6">
        <p class="text-body text-foreground/80 leading-relaxed">
          I welcome inquiries from prospective collaborators, graduate students, and colleagues. Please feel
          free to reach out.
        </p>

        <div class="space-y-4 text-sm">
          <div class="flex items-start gap-3 text-muted-foreground">
            <MapPin size={16} class="text-primary shrink-0 mt-0.5" />
            <div>
              <p class="font-medium text-foreground mb-0.5">Hong Kong University of Science and Technology</p>
              <p>Division of Public Policy</p>
              <p>Clear Water Bay, Kowloon, Hong Kong</p>
            </div>
          </div>
          <div class="flex items-center gap-3 text-muted-foreground">
            <Mail size={16} class="text-primary shrink-0" />
            <a href="mailto:xinglz@ust.hk" class="hover:text-primary transition-colors">xinglz@ust.hk</a>
          </div>
        </div>

        <div class="pt-2 space-y-3">
          <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</p>
          <div class="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {#each socialLinks as s (s.label)}
              {@const Icon = s.icon}
              {#if s.href}
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <span class="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                    <Icon size={15} class="text-primary shrink-0" />
                    {s.label}
                  </span>
                </a>
              {:else}
                <span class="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Icon size={15} class="text-primary shrink-0" />
                  {s.label}
                </span>
              {/if}
            {/each}
          </div>
        </div>
      </div>

      {#if sent}
        <div
          aria-live="polite"
          class="flex flex-col items-center justify-center text-center space-y-3 py-12"
        >
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Check size={24} class="text-primary" />
          </div>
          <p class="text-lg font-serif-display font-semibold text-foreground">Thank you!</p>
          <p class="text-sm text-muted-foreground">Your message has been sent. I'll get back to you soon.</p>
          <button onclick={() => (sent = false)} class="text-sm text-primary hover:underline mt-2">
            Send another message
          </button>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-4">
          {#if errorMsg}
            <div
              bind:this={errorEl}
              role="alert"
              tabindex="-1"
              class="rounded-sm border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
            >
              {errorMsg}
            </div>
          {/if}

          <div>
            <label for="name" class="block text-sm font-medium text-foreground mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autocomplete="name"
              class="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autocomplete="email"
              class="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="w-full px-3 py-2 rounded-sm bg-card border border-border text-foreground text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={submitting}
            class="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
          >
            <Send size={15} />
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
          <p class="text-caption text-muted-foreground pt-1">
            Prefer email? Write to <a href="mailto:xinglz@ust.hk" class="text-primary underline underline-offset-2">xinglz@ust.hk</a>.
          </p>
        </form>
      {/if}
    </div>
  </div>
</section>
