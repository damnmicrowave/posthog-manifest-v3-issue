import posthog from 'posthog-js'

function main() {
  posthog.init('<token>', {
    api_host: 'https://eu.i.posthog.com',
    disable_session_recording: true,
    disable_surveys: true,
    autocapture: false
  })

  const superUsefulButton = document.createElement('button')
  superUsefulButton.addEventListener('click', () => {
    posthog.capture('SuperUsefulButton > Clicked')
  })
  superUsefulButton.innerText = 'Click me!'

  document.body.prepend(superUsefulButton)
}

main()
