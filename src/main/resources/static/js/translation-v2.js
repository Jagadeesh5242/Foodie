/**
 * Enhanced Language Translation Handler
 * Handles Google Translate integration and language switching
 */

// Initialize translation on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Translation] Page loaded, initializing translation...');
    initializeTranslation();
});

// Fallback if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initializeTranslation();
}

function initializeTranslation() {
    console.log('[Translation] Initializing translation system...');
    
    // Load Google Translate script if not already loaded
    if (!window.google || !window.google.translate) {
        loadGoogleTranslateScript();
    }
    
    // Setup language selector
    setupLanguageSelector();
    
    // Hide Google Translate bar
    hideGoogleTranslateBar();
}

function loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    window.googleTranslateElementInit = function() {
        console.log('[Translation] Google Translate callback triggered');
        try {
            // Create a hidden div for Google Translate
            if (!document.getElementById('google_translate_element')) {
                const div = document.createElement('div');
                div.id = 'google_translate_element';
                div.style.display = 'none';
                document.body.appendChild(div);
            }
            
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,te,ta,ml,kn,ja,mr,gu,or,pa,bn,ur',
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
            
            console.log('[Translation] Google Translate initialized');
        } catch(e) {
            console.error('[Translation] Error initializing Google Translate:', e);
        }
    };
}

function setupLanguageSelector() {
    const languageSelectors = document.querySelectorAll('#languageSelector, .lang-selector');
    
    console.log('[Translation] Found ' + languageSelectors.length + ' language selectors');
    
    languageSelectors.forEach(selector => {
        // Set current language from localStorage
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        selector.value = savedLang;
        
        selector.addEventListener('change', function(e) {
            const selectedLanguage = this.value;
            console.log('[Translation] Language changed to:', selectedLanguage);
            localStorage.setItem('selectedLanguage', selectedLanguage);
            
            if (selectedLanguage === 'en') {
                // Reload page for English
                location.reload();
            } else {
                // Trigger Google Translate
                triggerGoogleTranslate(selectedLanguage);
            }
        });
    });
}

function triggerGoogleTranslate(language) {
    console.log('[Translation] Triggering translation for:', language);
    
    // Wait for Google Translate to be ready
    const checkTranslateReady = setInterval(() => {
        try {
            // Get the Google Translate select element
            const frame = document.querySelector('iframe.goog-te-frame');
            if (frame && frame.contentDocument) {
                const select = frame.contentDocument.querySelector('select');
                if (select) {
                    select.value = language;
                    select.dispatchEvent(new Event('change'));
                    clearInterval(checkTranslateReady);
                    console.log('[Translation] Translation triggered successfully');
                    return;
                }
            }
            
            // Alternative approach - use the Google Translate API directly
            if (window.google && window.google.translate) {
                const originalLanguage = 'en';
                const googleTranslatorElement = document.querySelector('.goog-te-gadget-simple select');
                
                if (googleTranslatorElement) {
                    googleTranslatorElement.value = 'auto|' + language;
                    googleTranslatorElement.dispatchEvent(new Event('change'));
                    console.log('[Translation] Translation triggered via gadget');
                    clearInterval(checkTranslateReady);
                }
            }
        } catch(e) {
            console.log('[Translation] Waiting for Google Translate to load...');
        }
    }, 500);
    
    // Clear interval after 5 seconds
    setTimeout(() => clearInterval(checkTranslateReady), 5000);
}

function hideGoogleTranslateBar() {
    // Add CSS to hide Google Translate banner
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
            height: 0 !important;
            visibility: hidden !important;
        }
        .skiptranslate {
            display: none !important;
        }
        body {
            top: 0 !important;
            position: relative !important;
        }
        .goog-te-gadget-simple > img,
        .goog-tooltip {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Monitor and remove Google Translate elements as they appear
    const observer = new MutationObserver(() => {
        const elements = document.querySelectorAll('.goog-te-banner-frame, .goog-te-top-compact, .goog-te-floating-scroll-container');
        elements.forEach(el => {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.height = '0';
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
}

console.log('[Translation] Translation module loaded');
