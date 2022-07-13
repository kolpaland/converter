var app = new Vue({
  el: '#app',
  data: {
    ws: null,
    endpoint: 'ws://127.0.0.1:64999',
    isConnected: false,
    isDisabled: false,
    stateMessage: "Websocket connection",
    typeMsg: "",
    hasError: false,
  },
  watch: {
    isConnected: function (val) {
      if (val) {
        this.connect();
      }
      else {
        this.disconnect();
      };
    }
  },
  methods: {
    connect() {

      if (this.ws) {
        console.log("Connection has been established before");
        return;
      }
      console.log("Starting connection to WebSocket Server");
      this.isDisabled = true;
      this.ws = new WebSocket(this.endpoint, [
        // see the rfc on sp websocket mapping:
        // raw.githubusercontent.com/nanomsg/nanomsg/master/rfc/sp-websocket-mapping-01.txt
        'pair.sp.nanomsg.org'
      ]);
      if (!this.ws) {
        console.log("Cannot to connect");
        this.isConnected = false;
        return;
      }

      this.typeMsg = "is-warning";
      this.stateMessage = "Connecting...";
      this.ws.onmessage = this.onmessagews;
      this.ws.onopen = this.onopenws;
      this.ws.onclose = this.onclosews;
      this.ws.onerror = this.onerrorws;

    },
    onopenws(event) {
      console.log("Connection is established!")
      hasError = false;
      this.stateMessage = "Connected!";
      this.typeMsg = "is-success";
      this.isDisabled = false;
    },
    onerrorws(event) {

      this.stateMessage = "Can’t establish a connection to the server at " + event.target.url;
      this.typeMsg = "is-danger";
      this.isDisabled = false;
      hasError = true;
      console.log("Can’t establish a connection to the server at " + event.target.url + "!");
    },
    onclosews(event) {

      console.log("The connection between the client and the server is closed");

      this.isDisabled = false;
      this.isConnected = false;
      this.ws = null;
      if (!hasError) {
        this.stateMessage = "Websocket connection";
        this.typeMsg = "";
        hasError = false;
      }
    },
    onmessagews(msg) {
      console.log("Receive message: " + msg);
      const reader = new FileReader();
      reader.addEventListener('loadend', function () {
        console.log(JSON.parse(reader.result));
      });
      reader.readAsText(msg.data);
    },
    disconnect() {
      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }
    }
  }
});