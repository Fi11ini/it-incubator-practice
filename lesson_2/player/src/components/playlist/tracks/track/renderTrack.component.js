export function renderPlaylistTrack(inputTrackForRendering) {
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