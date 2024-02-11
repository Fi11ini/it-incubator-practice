// data
const playlist = {
    title: "Hip-Hop Hits",
    coverImageUrl: "cover.png",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "track1.png",
            artistName: "Eminem",
            title: "Rap God",
            fileUrl: "eminem_-_8-mile.mp3",
            inTrend: false,
        },
        {
            coverImageUrl: "track2.png",
            artistName: "50cent",
            title: "In da Club",
            fileUrl: "50-cent_-_in-da-club.mp3",
            inTrend: true,
        },
    ],
};


// render
renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderPlaylistTracks(playlistForRendering);

}


function renderPlaylistHeaderTitle(playlistForRendering) {
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
}

function renderPlaylistHeaderCover(playlistForRendering) {
    const coverElement = document.createElement('img');
    coverElement.src = playlistForRendering.coverImageUrl
    document.body.append(coverElement)
}

function renderPlaylistHeader(playlistForRendering) {
    renderPlaylistHeaderTitle(playlistForRendering);
    renderPlaylistHeaderCover(playlistForRendering);

}

function renderPlaylistTracks(playlistForRendering) {
    renderPlaylistTrack(playlistForRendering.tracks[0]);
    renderPlaylistTrack(playlistForRendering.tracks[1]);
}

function renderPlaylistTrack(inputTrackForRendering) {
    const trackElement = document.createElement('div');

    const coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverImageUrl
    document.body.append(coverElement);
    trackElement.append(coverElement);

    const trackTitleElement = document.createElement('div');
    if (inputTrackForRendering.inTrend) {
        trackTitleElement.append('🔥')
    }

    trackTitleElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);
    trackElement.append(trackTitleElement);

    const audioElement = document.createElement('audio');
    audioElement.src = inputTrackForRendering.fileUrl;
    audioElement.controls = true;
    document.body.append(audioElement);
    trackElement.append(audioElement);


    document.body.append(trackElement)



}






