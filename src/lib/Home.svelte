<script>
  import { reveal } from './reveal.js';
  import headshot from '../assets/headshot.jpg';
</script>

<section id="home" class="py-20 md:py-28 scroll-mt-20">
  <div class="max-w-3xl mx-auto px-6">
    <div use:reveal class="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
      <div class="shrink-0">
        <img
          src={headshot}
          alt="Jack Linzhou Xing"
          class="w-40 h-48 md:w-48 md:h-56 object-cover rounded-sm shadow-md"
        />
      </div>
      <div class="space-y-5">
        <div>
          <h1 class="text-3xl md:text-4xl font-serif-display font-semibold text-foreground leading-tight tracking-display">
            Jack Linzhou Xing 邢麟舟
          </h1>
        </div>
        <div class="w-12 h-px bg-primary/40"></div>
        <p class="text-foreground/80 leading-relaxed text-body measure">
          I am an assistant professor at the <strong class="font-semibold text-foreground">Division of Public Policy, Hong Kong University of Science and Technology</strong>. Before that, I worked as an An Wang Postdoctoral Fellow at the <strong class="font-semibold text-foreground">Fairbank Center for Chinese Studies, Harvard University</strong>. I hold a Ph.D. in History and Sociology of Technology and Science and a graduate certificate in public policy from Georgia Institute of Technology.
        </p>
        <p class="text-foreground/80 leading-relaxed text-body measure">
          My research spans sociology of technology and work, science and technology studies (STS), and technology and innovation policy in China, focusing on the social implications and governance of the platform economy, digital infrastructure, and digital labor.
        </p>
        <p class="text-foreground/80 leading-relaxed text-body measure">
          Based on longitudinal ethnographic research, my dissertation traces and analyzes how digital platforms, gig workers, and tech workers interact with each other and navigate the contingent regulatory environment amid the compressed socioeconomic transition, geopolitical tension, and pervasive techno-nationalism and techno-developmentalism in China.
        </p>
      </div>
    </div>
  </div>
</section>
