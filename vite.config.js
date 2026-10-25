import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  appType: 'mpa',
  build: {
    rolldownOptions: {
      input: [
        'index.html',
        'research/automation/index.html',
        'research/infrastructure/index.html',
        'research/governance/index.html',
        'research/innovation/index.html'
      ]
    }
  }
});
