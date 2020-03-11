# focus

### Usage

```html
<script>
  import { focus } from '@sveltech/focus'
</script>

<h1 use:focus>I will be focused</h1>

```


##### Notes
If multiple elements with focus are loaded synchronously, the element with the shortest ancestor tree takes precedence and is focused.
