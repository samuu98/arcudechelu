import { SiteConfig } from './types';
import { arcudechelu } from './arcudechelu';
import { sito2 } from './sito2';
import { sito3 } from './sito3';

// Multi-site configuration system
// The active site is determined by the NEXT_PUBLIC_SITE environment variable
// Default to 'arcudechelu' if not specified

const ACTIVE_SITE = process.env.NEXT_PUBLIC_SITE || 'arcudechelu';

// Map of all available site configurations
const sites: Record<string, SiteConfig> = {
    arcudechelu,
    sito2,
    sito3
};

// Export the active configuration based on environment variable
export const siteConfig = sites[ACTIVE_SITE];

// Validate that the selected site exists
if (!siteConfig) {
    throw new Error(
        `Invalid NEXT_PUBLIC_SITE value: "${ACTIVE_SITE}". ` +
        `Available sites: ${Object.keys(sites).join(', ')}`
    );
}

// Export the active site name for reference
export const activeSiteName = ACTIVE_SITE;

// Export all site configs for potential admin/switching UI
export { arcudechelu, sito2, sito3 };
