![react-hider](logo/react-hider-logo.jpg)

<br />

<div align="center"><strong>Conditional Rendering Made Easy</strong></div>
<div align="center">A minimalist show or not library based on conditional rendering foundations</div>

<br />

<div align="center">
<!-- Badges -->

![Release](https://img.shields.io/badge/release-v1.0.0-success)&nbsp;![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-success)&nbsp;![Version](https://img.shields.io/github/v/release/facebook/react?logo=react)&nbsp;![License](https://img.shields.io/npm/l/react?color=blue)

</div>

<div align="center">
    <sub>Created by <a href="https://twitter.com/theoliveralr">Oliver ALR</a> and mantained with ❤️ and ☕️. Join me just contributing 💻</sub>
</div>

<br />

## Features

<dl>
    <dt><i>Just one component</i></dt>
    <dd>Wrap all your to-render components inside Hider component.</dd>
</dl>
<dl>
    <dt><i>Less verbose components</i></dt>
    <dd>Simple as reduce dirty components doing more readable code.</dd>
</dl>
<dl>
    <dt><i>Inline if with && logical operator</i></dt>
    <dd>Render one single component if the condition is true.<dd>
</dl>
<dl>
    <dt><i>Inline if-else with conditional operator</i></dt>
    <dd>Render or not an expected value based on a boolean prop.</dd>
</dl>

### Get Started

```
npm install react-hider
```

```
import Hider from 'react-hider'
```

Wrap first the component to show and second the component to hide 
inside Hider(library provided) or use pure raw jsx and provide a <strong>boolean(true/false)</strong> state: 

```jsx
<Hider state={boolean}>
    <ComponentToShow />
    <ComponentToHide />
</Hider>
```

## Examples Up and Running

Show or Hide elements based on a <strong>boolean(true/false)</strong> pased to state prop:

```jsx
const DisAppear = () => {
    const [hide, setHide] = useState(true)

    return (
        <div>
            <Hider state={hide}>
                <Show />
                <Hide />
            </Hider>
            <button onClick={() => setHide(false)}>Click to Change</button>
        </div>
    )
}
```

Show just one single element just if the <strong>boolean state is true</strong>:

```jsx
const Appear = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <Hider state={show}>
                <Show />
            </Hider>
            <button onClick={() => setShow(true)}>Click to Show</button>
        </div>
    )
}
```

## License

This project is licensed under the MIT license, Copyright © 2020 Oliver ALR.
For more information see `LICENSE.md`.
