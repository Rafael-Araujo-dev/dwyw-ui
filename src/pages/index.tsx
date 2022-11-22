import { useState } from 'react'

import { Button } from '@atoms/Button'

function Home() {

  const [outline, setOutline] = useState(false)

  const handleOutline = () => setOutline(!outline)

  const buttons = {
    primary: {
      mode: 'primary',
      onClick: handleOutline,
      outline: false,
      label: 'Primary',
      fill: false,
      width: 'auto',
      styleString: 'http://localhost:6006/?path=/story/atoms-button--primary&args=size:large;label:tetse;width:100%'
    }
  }

  return (
    <>
      {
        Object.values(buttons).map((btn, index) => {

          return <Button
            key={index}
            mode={btn.mode}
            outline={btn.outline}
            fill={btn.fill}
            width={btn.width}
            onClick={btn.onClick}
            styleString={btn.styleString}
          >
            {btn.label}
          </Button>
        })
      }
    </>
  )
}


export default Home