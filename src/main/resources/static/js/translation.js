/**
 * Translation Module
 * Handles language switching between English, Hindi, and Telugu
 */

// Hide Google Translate bar - Aggressive approach
function hideGoogleTranslateBar() {
  // CSS to hide all Google Translate elements
  const style = document.createElement('style');
  style.innerHTML = `
    .goog-te-banner-frame {
      display: none !important;
      height: 0 !important;
      visibility: hidden !important;
    }
    .goog-te-top-compact {
      display: none !important;
      height: 0 !important;
      visibility: hidden !important;
    }
    .goog-te-floating-scroll-container {
      display: none !important;
    }
    .skiptranslate {
      display: none !important;
    }
    body {
      top: 0 !important;
      position: relative !important;
      margin-top: 0 !important;
      padding-top: 0 !important;
    }
    html {
      top: 0 !important;
    }
  `;
  document.head.appendChild(style);
  
  // Watch for Google Translate elements and remove them immediately
  const observer = new MutationObserver(() => {
    // Hide banner frame
    const bannerFrames = document.querySelectorAll('.goog-te-banner-frame, .goog-te-top-compact, .goog-te-floating-scroll-container');
    bannerFrames.forEach(frame => {
      frame.style.display = 'none';
      frame.style.visibility = 'hidden';
      frame.style.height = '0';
    });
    
    // Remove inline top margin/padding from body
    document.body.style.top = '0';
    document.body.style.marginTop = '0';
    document.body.style.paddingTop = '0';
    document.documentElement.style.top = '0';
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });
  
  // Initial cleanup
  setTimeout(() => {
    document.querySelectorAll('.goog-te-banner-frame, .goog-te-top-compact').forEach(el => {
      el.style.display = 'none !important';
      el.style.visibility = 'hidden !important';
    });
    document.body.style.top = '0';
    document.documentElement.style.top = '0';
  }, 500);
}

// Call immediately
hideGoogleTranslateBar();

class RecipeTranslator {
  constructor() {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.supportedLanguages = ['en', 'hi', 'te'];
    this.translations = {};
    this.isInitialized = false;
    this.initializationAttempts = 0;
    this.maxAttempts = 5;
    console.log('[Translation] Constructor called. Current language:', this.currentLanguage);
  }

  /**
   * Initialize Google Translate API
   */
  initializeGoogleTranslate() {
    console.log('[Translation] Initializing Google Translate...');
    
    // Check if script already exists
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      console.log('[Translation] Google Translate API already loaded');
      this.setupGoogleTranslate();
      return;
    }

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onload = () => console.log('[Translation] Google Translate script loaded');
    script.onerror = () => console.error('[Translation] Failed to load Google Translate');
    document.head.appendChild(script);

    window.googleTranslateElementInit = () => {
      console.log('[Translation] googleTranslateElementInit called');
      this.setupGoogleTranslate();
    };
  }

  /**
   * Setup Google Translate Element
   */
  setupGoogleTranslate() {
    try {
      const element = document.getElementById('google_translate_element');
      if (!element) {
        console.warn('[Translation] google_translate_element not found in DOM');
        return;
      }

      if (this.isInitialized) {
        console.log('[Translation] Google Translate already initialized');
        return;
      }

      console.log('[Translation] Setting up Google Translate Element');
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,te',
          autoDisplay: false,
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );

      this.isInitialized = true;
      console.log('[Translation] Google Translate initialized successfully');
    } catch (e) {
      console.error('[Translation] Error setting up Google Translate:', e);
    }
  }

  /**
   * Change language and update page
   */
  changeLanguage(langCode) {
    if (!this.supportedLanguages.includes(langCode)) {
      console.warn(`[Translation] Language ${langCode} not supported`);
      return;
    }

    console.log('[Translation] Changing language to:', langCode);
    this.currentLanguage = langCode;
    localStorage.setItem('selectedLanguage', langCode);

    // Update language selector
    const selector = document.getElementById('languageSelector');
    if (selector) {
      selector.value = langCode;
      console.log('[Translation] Updated language selector to:', langCode);
    }

    // Update Google Translate
    this.updateGoogleTranslate(langCode);

    // Dispatch custom event for other components
    window.dispatchEvent(
      new CustomEvent('languageChanged', { detail: { language: langCode } })
    );

    console.log('[Translation] Language change complete');
  }

  /**
   * Update Google Translate language
   */
  updateGoogleTranslate(langCode) {
    const languageMap = {
      en: 'English',
      hi: 'Hindi',
      te: 'Telugu'
    };

    try {
      console.log('[Translation] Updating Google Translate to:', languageMap[langCode]);
      
      // Try to find and update the combo box
      const comboElement = document.querySelector('.goog-te-combo');
      if (comboElement) {
        console.log('[Translation] Found .goog-te-combo, updating value');
        comboElement.value = languageMap[langCode] || 'English';
        comboElement.dispatchEvent(new Event('change', { bubbles: true }));
        console.log('[Translation] Google Translate combo updated');
        return;
      }
      
      // If combo not found, try alternative method
      console.log('[Translation] .goog-te-combo not found, trying alternative method');
      
      // Set Google Translate cookie
      document.cookie = `googtrans=/en/${langCode === 'en' ? 'en' : (langCode === 'hi' ? 'hi' : 'te')}`;
      
      // Try to reload translation
      if (window.location.href.indexOf('_escaped_fragment_') === -1) {
        console.log('[Translation] Reloading page to apply translation');
        // Wait a bit then reload
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    } catch (e) {
      console.error('[Translation] Error updating Google Translate:', e);
    }
  }

  /**
   * Set up language selector in navbar
   */
  setupLanguageSelector() {
    const selector = document.getElementById('languageSelector');
    if (!selector) {
      console.warn('[Translation] Language selector not found in the page');
      return;
    }

    console.log('[Translation] Setting up language selector');

    // Set current language
    selector.value = this.currentLanguage;
    console.log('[Translation] Set selector to:', this.currentLanguage);

    // Listen for changes
    selector.addEventListener('change', (e) => {
      console.log('[Translation] Language selector changed to:', e.target.value);
      this.changeLanguage(e.target.value);
    });
  }

  /**
   * Get current language
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Get all supported languages
   */
  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  /**
   * Reinitialize translation when page loads
   */
  reinitialize() {
    console.log('[Translation] Reinitializing...');
    this.setupLanguageSelector();
    
    if (!this.isInitialized) {
      this.initializeGoogleTranslate();
    }
  }
}

// Initialize translator on page load
let translator;

function initializeTranslator() {
  console.log('[Translation] Document ready - initializing translator');
  if (!translator) {
    translator = new RecipeTranslator();
    window.translator = translator;
    translator.reinitialize();
  }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTranslator);
} else {
  initializeTranslator();
}

