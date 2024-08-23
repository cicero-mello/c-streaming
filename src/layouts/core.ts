export const anchorSpaceAsEnter = () => {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('keydown', (event) => {
          if (event.code === 'Space') {
            event.preventDefault()
            link.click()
          }
        })
    })
}
