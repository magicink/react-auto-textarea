## Overview

> A `<textarea />` element that automatically resizes the height of its content.

### Usage

```ecmascript 6
import { AutoTextArea } from 'react-auto-textarea'
export const SomeComponent = () => {
  const [someValue, setValue] = React.useState('')
  const textAreaProps = {/** ... */}
  const handleChange = e => {/** ... */}
  const handleBlur = e = {/** ... */}
  return (
    <AutoTextArea onBlur={handleBlur} onChange={handleChange} options={textAreaProps} value={someValue} />
  )
}
```

### Props

All standard `<textarea />` props are passed directly to the underlying element. The following props provide additional functionality.

| Name        |         Type         | Default | Description                                                                                                                                                              |
| :---------- | :------------------: | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxheight` |       `number`       |   `0`   | Indicates the maximum height of the `<textarea />` in pixels. A value of `0`, means the text area expands without limit.                                                 |
| `minheight` | `number` or `string` |    -    | Indicates the minimum height of the `<textarea />` (in pixels by default). You can specify units by passing a `string` (i.e. `50%`)                                      |
| `width`     |       `string`       |    -    | If present, this specifies the width the `<textarea />`. If absent, the width will be set to `100%`. You are responsible for supplying units (i.e. `100px`, `50%`, etc.) |
