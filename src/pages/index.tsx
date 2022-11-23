import { Button, Props as ButtonProps } from '@atoms/Button'

function Home() {

  const handleButtonClick = (message?: string) => console.log(message)

  const buttons: { [key: string]: ButtonProps } = {
    default: {
      variant: 'default',
      onClick: () => handleButtonClick('Default Button'),
      outline: false,
      children: 'Default',
      fill: false,
      width: 'auto',
    },
    primary: {
      variant: 'primary',
      onClick: () => handleButtonClick('Primary Button'),
      outline: false,
      children: 'Primary',
      fill: false,
      width: 'auto',
      styleString: 'http://localhost:6006/?path=/story/atoms-button--primary&args=color:!hex(050505);colorHover:!hex(f6e610);backgroundColor:!hex(fffc00);backgroundColorHover:!hex(000000);'
    },
    secondary: {
      variant: 'secondary',
      onClick: () => handleButtonClick('Secondary Button'),
      outline: false,
      children: 'Secondary',
      fill: false,
      width: 'auto',
    }
  }

  return (
    <>
      {
        Object.values(buttons).map((btn, index) => {
          return (
            <Button
              key={index}
              variant={btn.variant}
              outline={btn.outline}
              fill={btn.fill}
              width={btn.width}
              onClick={btn.onClick}
              styleString={btn.styleString}
            >
              {btn.children}
            </Button>
          )
        })
      }
    </>
  )
}


export default Home