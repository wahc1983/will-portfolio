import { useEffect } from 'react'

const CloudflareAnalytics = () => {
  useEffect(() => {
    const token = import.meta.env.VITE_CF_BEACON_TOKEN

    if (!token) return undefined

    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
    script.setAttribute('data-cf-beacon', JSON.stringify({ token }))
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}

export default CloudflareAnalytics
