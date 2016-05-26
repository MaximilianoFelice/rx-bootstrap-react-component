#Really Reactive React Components
This library extends React Component behaviour to the 3R (Really Reactive React) Application Architecture, generalizing them on a new extent.

##3R Application Architecture
Really Reactive React is a software architecture based on ReactiveX real life applications. This system is based on the use of `Rx.Subject` and `Rx.Observable` for uncoupling the communications between components.

###Why?
[TBW]

###How does it work?
3R Architectures are based on the following premise: **No direct communication should be done between non hierarchical components. If you need to, communication between those components should be done via an immutable stream system.**

###Component Premises
- Explicit components state changes should be avoided at all costs. Potentially, every component state mutation must be mapped directly from a stream event publication. This could be achieved by using the `RxReact.Component` behaviour.
- By only allowing state mutation via streams, every component MUST keep referential transparency. You should see the component state only as a feature for performance upgrade, rather than a feature itself.

###Component API
Components created under 3R should commit to provide the following API:

- By convention, every component publishes and consumes stream items with `JsonAPI` format.

- Every component MUST provide an `observeOn` property, on which it will observe for reacting to events. For example:
```JAVASCRIPT
// Input might as well be an abstract class in every strongly typed language
class Input extends RxReact.Component {
    static defaultProps = {observeOn: new Rx.Subject()}
    
    /* Sets a default value */
    componentWillMount(){this.state.observeOn({data: {value: "Hola"}})}
    
    /* Sets the consuming stream */
    getStateStream(){return this.state.observeOn.map(x => x.data)}
    
    render(){return(
        <input {...this.state} />
    )}
}
```

- Every component MUST provide a `publishOn` property, on which it will publish its events according to the [Event Types](#EventTypes) guidance.

##Event Types
[TBW]
