# Dynamic YouTube Feed

This script grabs the latest videos from a specified youtube channel and outputs them on the page as if you'd manually used the "Embed" functionality. This script operates entirely on the client side (no server required), and is written in vanilla ES6 Javascript with no dependencies. It is lightweight at only 2kb and is configurable to your liking.

## But why not just use the Youtube API?

The API is great but overkill for this scenario. If all you want is your latest videos to display, then setting up this script is easier than going through the API docs.

## Usage

1. Load this script before your custom JS.
2. In your custom JS call the function `dynamicYoutubeFeed`

```
dynamicYoutubeFeed({
    channelId, // Required. *String* The id of the youtube channel
    wrapperId, // Required. *String* The CSS Id of the div that will hold your videos
    limit,  // Optional. *Int* How many videos to display. Defaults to 5 
    videoWrapper, // Optional *String* The CSS Class that will wrap each video. Defaults to "youtubeVideo"
    iframeWidth, // Optional *Int* Iframe width. Defaults to 560
    iframeHeight // Optional *Int* Iframe height. Defaults to 315 
})
```

### Example usage

HTML: 
```
<body>
    <div id="myYoutubeClips"></div>
    <script src="youtubeFeed.js" ></script>
    <script src="custom.js" ></script>
</body>
```

CUSTOM JS:
```
dynamicYoutubeFeed({ 
    wrapperId: "myYoutubeClips",
    channelId: "UC4PIiYewI1YGyiZvgNlJNrA",
    limit: 5
});
```
