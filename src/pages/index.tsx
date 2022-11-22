import { Button, Props as ButtonProps } from '@atoms/Button'

function Home() {

  const handleButtonClick = (message?: string) => console.log(message)

  const buttons: { [key: string]: ButtonProps } = {
    default: {
      mode: 'default',
      onClick: () => handleButtonClick('Default Button'),
      outline: false,
      label: 'Default',
      fill: false,
      width: 'auto',
    },
    primary: {
      mode: 'primary',
      onClick: () => handleButtonClick('Primary Button'),
      outline: false,
      label: 'Primary',
      fill: false,
      width: 'auto',
      styleString: 'http://localhost:6006/?path=/story/atoms-button--primary&args=color:!hex(050505);colorHover:!hex(f6e610);backgroundColor:!hex(fffc00);backgroundColorHover:!hex(000000);'
    },
    secondary: {
      mode: 'secondary',
      onClick: () => handleButtonClick('Secondary Button'),
      outline: false,
      label: 'Secondary',
      fill: false,
      width: 'auto',
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