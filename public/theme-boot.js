// Runs before first paint so returning dark-mode visitors never see a light flash.
try {
  var t = localStorage.getItem('theme')
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }
} catch {
  /* no storage access — default (light) theme applies */
}
