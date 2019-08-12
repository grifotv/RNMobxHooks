# RNMobxHooks
React Native sample app using MobX in both Class and Functional components.

## Dependencies
- React Native `0.59.10`
- React `16.8.3`
- MobX `5.13.0`
- MobX-React `6.1.3`
- TypeScript `3.5.3`

## Known issues and workarounds
- Unable to use MobX-React 6 decorators in React Native 0.59 https://github.com/mobxjs/mobx-react/issues/690
    - Workaround https://github.com/mobxjs/mobx-react/issues/690#issuecomment-508647033
    - Fix for this won't land until React Native 0.61 https://github.com/facebook/react-native/issues/24553#issuecomment-507779134
    - Dan Abramov recommend avoiding the use of decorators yet https://github.com/facebook/react-native/issues/24553#issuecomment-517075258
- Pass stores around
    - Can be done via `inject` HOC of via React context API in both Class and Functional components
    - Simpler to use hooks in Functional components https://mobx-react.js.org/recipes-migration#hooks-for-the-rescue
- Ensure observer components are reactive
    - Use store props within the `render` method. https://stackoverflow.com/questions/52807329/mobx-observed-component-does-not-rerender-after-observable-change
    - The above is not an issue with Functional components as it's essentially only a render method. 
    - Class or Functional components are not reative when store props are used within render props of non observer components.
    - Workaround is to use store props outside render props, or use HOC instead of render props.
    - Best to avoid both render props and HOC, which is doable with Functional components and hooks.
    
## Resources
- https://twitter.com/jamonholmgren/status/1153866321966166016
- https://iconof.com/best-practices-for-mobx-with-react/
- https://mobx.js.org/best/pitfalls.html
- https://mobx-react.js.org/recipes-migration
