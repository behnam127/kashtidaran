export const converter = (text: string) => text.replace(/[٠-٩۰-۹]/g, (a) => String(a.charCodeAt(0) & 15))
