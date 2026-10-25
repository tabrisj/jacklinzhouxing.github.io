<script>
  import { Cpu, Globe, Shield, Lightbulb, Microscope } from '@lucide/svelte';
  import { reveal } from './reveal.js';
  import SectionHeading from './SectionHeading.svelte';

  const pillars = [
    {
      icon: Cpu,
      title: 'Technology, Automation, and Work',
      description:
        'Exploring human-machine interactions and labor transformation in digital platforms, autonomous vehicles, and generative AI.',
      href: '/research/automation/'
    },
    {
      icon: Globe,
      title: 'Digital Infrastructure',
      description:
        'Analyzing the development trajectories of tools like contact-tracing, e-government platforms, and cloud infrastructure.',
      href: '/research/infrastructure/'
    },
    {
      icon: Shield,
      title: 'Strategies and Governance of Emerging Tech',
      description: 'Investigating platform governance, innovation policies, and state-tech relations.',
      href: '/research/governance/'
    },
    {
      icon: Lightbulb,
      title: 'Interdisciplinary Understanding of Innovation',
      description:
        'Bridging critical and instrumental analyses through the history of science and technology, STS, and innovation studies.',
      href: '/research/innovation/'
    }
  ];
</script>

<section id="research" class="py-14 md:py-16 border-t border-border scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <SectionHeading icon={Microscope} title="Research" />

    <div class="grid md:grid-cols-2 gap-4">
      {#each pillars as item, i (item.title)}
        {@const Icon = item.icon}
        <div use:reveal={{ delay: i * 80 }}>
          <a
            href={item.href}
            class="block border border-border rounded-sm p-5 bg-card scroll-mt-24 hover:border-primary/40 hover:shadow-sm transition-all duration-200 group"
          >
            <Icon size={20} class="text-primary mb-3" />
            <h3
              class="text-base font-semibold text-foreground font-serif-display mb-2 group-hover:text-primary transition-colors"
            >
              {item.title}
            </h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
