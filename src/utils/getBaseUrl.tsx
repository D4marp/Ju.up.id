

export const getBaseUrl = () => {
 return typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_BASE_URL

}