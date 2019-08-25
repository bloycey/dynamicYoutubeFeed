const dynamicYoutubeFeed = ({ channelId, wrapperId, limit =5, videoWrapper = "youtubeVideo", iframeWidth = 560, iframeHeight = 315 }) => {
    const youtubeXMLfeed = `https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`

    const getXMLFeed = url => {
        return fetch(url, {mode: 'cors'})
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    }

    const xmlYoutube = getXMLFeed(youtubeXMLfeed).then(data => {
        getVideos(data);
    });

    const htmlToElement = html => {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }

    const getVideos = data => {
        const allVideoCodes = Array.from(data.querySelectorAll("entry link")).map(link => link.attributes.href.value.split("=")[1]);
        const allEmbedLinks = allVideoCodes.map(code => `<div class="${videoWrapper}"><iframe width="${iframeWidth}" height="${iframeHeight}" src="https://www.youtube.com/embed/${code}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`)
        allEmbedLinks.slice(0,limit).forEach(link => {
            document.getElementById(wrapperId).appendChild(htmlToElement(link));
        });
    }
}