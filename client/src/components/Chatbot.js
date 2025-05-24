import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "30720cb5-792b-45ee-9a83-b0c63fbe9bef",
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '30720cb5-792b-45ee-9a83-b0c63fbe9bef',
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot