# Setup
1. After cloning the project, edit your `/etc/hosts` file to add the following line at the end of the file:
    ```
    127.0.0.1 proxied.local
    ```

2. open a terminal and navigate to the `nginx-https-proxy` folder. Run the `generate.sh` script to create a set of keys for local https:
    ```
    /path/to/repo
    $ cd nginx-https-proxy

    /path/to/repo/nginx-https-proxy
    $ ./generate.sh
    ```

3. Start the proxy demo by running `docker compose up`:
    ```
    /path/to/repo/nginx-https-proxy
    $ docker compose up
    ```

4. In a new terminal window, navigate back to the root of the project and run `yarn install`:
    ```
    /path/to/repo
    $ yarn install
    ```

5. Once the dependencies are installed, run `edg dev` to start up the edgio dev server:
    ```
    /path/to/repo
    $ edg dev
    ```

6. Test that the proxied call works properly by navigating to `http://localhost:3000` in your browser. You should see the contents of the nginx server, which is only available via HTTPS. You can further verify that the nginx service is only available by HTTPS by curling `http://proxied.local` - you should get a "Connection refused" error. If you curl `https://proxied.local` however, you should get the boilerplate HTML page.