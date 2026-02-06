// Fixed JavaScript for search and language functionality
window.addEventListener('load', function() {
    // Initialize elements after page load
    const searchInput = document.getElementById('searchInput');
    const suggestionsList = document.getElementById('suggestionsList');
    const languageSelector = document.getElementById('languageSelector');
    
    if (!searchInput || !suggestionsList) return;

    // Clear search input on page load
    searchInput.value = '';
    suggestionsList.innerHTML = '';
    suggestionsList.style.display = 'none';

    // Search functionality with debounce
    let searchTimeout;
    searchInput.addEventListener('input', async (e) => {
        clearTimeout(searchTimeout);
        const keyword = e.target.value.trim();
        
        if (keyword.length === 0) {
            suggestionsList.style.display = 'none';
            suggestionsList.innerHTML = '';
            return;
        }

        // Debounce the search requests
        searchTimeout = setTimeout(async () => {
            try {
                const response = await fetch(`/api/recipes/search?keyword=${encodeURIComponent(keyword)}`);
                if (!response.ok) throw new Error('Search failed');
                
                const recipes = await response.json();
                suggestionsList.innerHTML = '';
                
                if (recipes && recipes.length > 0) {
                    recipes.forEach(recipe => {
                        const li = document.createElement('li');
                        li.textContent = recipe;
                        li.style.cursor = 'pointer';
                        li.addEventListener('click', () => {
                            const recipePath = recipe.toLowerCase().replace(/\s+/g, '-');
                            searchInput.value = ''; // Clear before navigation
                            window.location.href = '/' + recipePath;
                        });
                        suggestionsList.appendChild(li);
                    });
                    suggestionsList.style.display = 'block';
                } else {
                    suggestionsList.innerHTML = '<li style="color: #999; padding: 14px 20px;">No recipes found</li>';
                    suggestionsList.style.display = 'block';
                }
            } catch (error) {
                console.error('Search error:', error);
                suggestionsList.innerHTML = '<li style="color: #999; padding: 14px 20px;">Error searching recipes</li>';
                suggestionsList.style.display = 'block';
            }
        }, 300); // 300ms debounce
    });

    // Handle Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            clearTimeout(searchTimeout);
            const keyword = searchInput.value.trim();
            if (keyword) {
                const recipePath = keyword.toLowerCase().replace(/\s+/g, '-');
                searchInput.value = ''; // Clear before navigation
                window.location.href = '/' + recipePath;
            }
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.autocomplete-container')) {
            suggestionsList.style.display = 'none';
        }
    });

    // Focus to show suggestions again
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length > 0 && suggestionsList.innerHTML) {
            suggestionsList.style.display = 'block';
        }
    });

    // Language selector - wait for Google Translate to load
    if (languageSelector) {
        languageSelector.addEventListener('change', function(e) {
            const selectedLang = e.target.value;
            const langNames = {
                'en': 'English',
                'te': 'తెలుగు', // Telugu text
                'hi': 'हिन्दी'   // Hindi text
            };
            
            // Try to trigger Google Translate
            try {
                // Method 1: Try to find and trigger the translate combo
                const googleTranslateCombo = document.querySelector('.goog-te-combo');
                if (googleTranslateCombo) {
                    googleTranslateCombo.value = langNames[selectedLang] || 'English';
                    googleTranslateCombo.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                // Method 2: Use translatePage function if available
                if (window.google && window.google.translate) {
                    try {
                        new google.translate.TranslateElement({
                            pageLanguage: selectedLang,
                            includedLanguages: 'en,te,hi',
                            autoDisplay: false
                        }, 'google_translate_element');
                    } catch(err) {
                        console.log('Translate method 2 failed:', err);
                    }
                }
            } catch (err) {
                console.log('Language change error:', err);
            }
        });
    }
});

// Initialize Google Translate Element
function googleTranslateElementInit() {
    try {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,te,hi',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    } catch (e) {
        console.log('Google Translate initialization deferred');
    }
}

// Retry Google Translate initialization if it fails
setTimeout(() => {
    try {
        if (window.google && window.google.translate && window.google.translate.TranslateElement) {
            googleTranslateElementInit();
        }
    } catch (e) {
        console.log('Deferred initialization also failed');
    }
}, 1000);
