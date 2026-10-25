import { mount } from 'svelte';
import '../app.css';
import HomePage from '../lib/HomePage.svelte';

mount(HomePage, { target: document.getElementById('app') });
