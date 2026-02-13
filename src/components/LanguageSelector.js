'use client';

import { useState, useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, GlobeIcon } from '@radix-ui/react-icons';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isTranslateReady, setIsTranslateReady] = useState(false);

    useEffect(() => {
        // Wait for Google Translate to be ready
        const checkGoogleTranslate = () => {
            if (window.google && window.google.translate) {
                setIsTranslateReady(true);
            } else {
                setTimeout(checkGoogleTranslate, 100);
            }
        };
        checkGoogleTranslate();
    }, []);

    const handleLanguageChange = (languageCode) => {
        if (!isTranslateReady) return;
        
        setSelectedLanguage(languageCode);
        
        // Trigger Google Translate
        const selectElement = document.querySelector('#google_translate_element select');
        if (selectElement) {
            selectElement.value = languageCode;
            selectElement.dispatchEvent(new Event('change'));
        }
    };

    if (!isTranslateReady) {
        return (
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500">
                <GlobeIcon className="w-4 h-4" />
                Loading...
            </div>
        );
    }

    return (
        <Select.Root value={selectedLanguage} onValueChange={handleLanguageChange}>
            <Select.Trigger className="inline-flex items-center justify-between gap-2 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]">
                <div className="flex items-center gap-2">
                    <span>{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                    <Select.Value />
                </div>
                <Select.Icon>
                    <ChevronDownIcon className="w-4 h-4" />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50">
                    <Select.Viewport className="p-1">
                        {languages.map((language) => (
                            <Select.Item
                                key={language.code}
                                value={language.code}
                                className="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                                <span>{language.flag}</span>
                                <Select.ItemText>{language.name}</Select.ItemText>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}