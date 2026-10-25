<script>
  import Navbar from './Navbar.svelte';
  import Home from './Home.svelte';
  import Publications from './Publications.svelte';
  import News from './News.svelte';
  import Research from './Research.svelte';
  import Teaching from './Teaching.svelte';
  import Engagement from './Engagement.svelte';
  import CV from './CV.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';
  import BackToTop from './BackToTop.svelte';
</script>

<div class="min-h-screen bg-background">
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-body-sm focus:font-medium focus:text-primary-foreground"
  >
    Skip to content
  </a>

  <Navbar />
  <main id="main-content">
    <Home />
    <Publications />
    <News />
    <Research />
    <Teaching />
    <Engagement />
    <CV />
    <Contact />
  </main>
  <Footer />
  <BackToTop />
</div>
