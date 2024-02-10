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
            isHot: false,
        },
        {
            coverImageUrl: "track2.png",
            artistName: "50cent",
            title: "In da Club",
            fileUrl: "50-cent_-_in-da-club.mp3",
            isHot: true,
        },
    ],
};


// render
renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {
    const playlistElement = document.createElement('h2');
    playlistElement.append('playlist will be here');
    document.body.append(playlistElement);
}

/test





