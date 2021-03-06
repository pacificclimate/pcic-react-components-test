# pcic-react-components-test

This is a React app to test end-to-end usage of components exported by
package [`pcic-react-components`](https://github.com/pacificclimate/pcic-react-components).

Its behaviour should be the same as that of the demo portion
of `pcic-react-components`. As of this writing, it is.

Notes: 

* This project uses React Bootstrap 1.0. (In fact, it serves as the basic demonstration of what
is required to do so.) This demonstrates that there is no conflict or dependence on RB 0.32
in `pcic-react-components`, whose dev dependencies (but not package content) include RB 0.32.

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing with a local installation

One often wants to develop a package and its client(s) in parallel. Constantly publishing and re-installing the 
package is slow and gets tiresome fast.

There is a quicker method: [Install the package locally](https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be):

1. In your local package repo, make the package under development linkable: 

    ```bash
    cd /path/to/package
    npm link
    ```
1. In your client repo, link to the package: 

    ```bash
    cd /path/to/client
    npm link <package-name>
    ```

1. When you rebuild your package (which may be frequent in development), you must re-link the package from the client 
repo. Tiresome, but quick and easy. 

1. You'll also probably have to restart the client app. 

