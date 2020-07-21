# CSS Review

## Flexbox

### properties for the Parent (flex container)
display : This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children

``` 
.container{
    display: flex;
}
```

flex-direction : This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is a single-direction layout concept. 

```
.container {
    flex-direction: row | row-reverse | column | column-reverse
}
```

flex-wrap: By default, fex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property

```
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}

flex-flow: This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. The default value is row nowrap

```
.container {
    flex-flow: column wrap;

}
```

justify-content: This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```
.container {
    justify-content: flex-start } flex-end | center | space-between | space-around | space-evenly
}
```

align-items: This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis.

```
.container {
    align-items: stretch | flex-start | flex-end | center |
}
```