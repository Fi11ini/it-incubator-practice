export function renderPlaylistHeader(playlistForRendering) {
    renderPlaylistHeaderTitle(playlistForRendering);
    renderPlaylistHeaderCover(playlistForRendering);

}

function renderPlaylistHeaderTitle(playlistForRendering) {
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
    const button = createButton('DELETE');
    playlistTitleElement.append(button)
}

function renderPlaylistHeaderCover(playlistForRendering) {
    const coverElement = document.createElement('img');
    coverElement.src = playlistForRendering.coverImageUrl
    document.body.append(coverElement)
}

function createButton(text) {
    const buttonEl = document.createElement('button');
    buttonEl.append(text);
    return buttonEl
}

