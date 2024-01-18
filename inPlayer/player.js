const playList = {
    playListId: "1",
    playListInfo: {
        title: "Hip-hop hits",
        coverImageUrl: "assets/images/playlist1.png",
        totalInfo: {
            totaltrackCount: 4,
            totaltracksDurationInSec: 733
        }
    },
    tracks: [
        {
            trackId: "11",
            trackCoverImageUrl: "assets/images/track1.png",
            artistName: "Eminem",
            trackTitle: "Rap God",
            trackFileUrl: "assets/Eminem_-_Rap_God.mp3",
            trackDurationInSec: 1,
            isHot: false
        },
        {
            trackId: "12",
            trackCoverImageUrl: "assets/images/track2.png",
            artistName: "50cent",
            trackTitle: "In da Club",
            trackFileUrl: "assets/50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
            trackDurationInSec: 1,
            isHot: true
        },
    ]
};


// const playListTitleEl = document.createElement("h1"); //создание заголовка
// playListTitleEl.append(playList.title);
// document.body.append(playListTitleEl);


// const playListCoverEl = document.createElement("img"); //обложка
// playListCoverEl.src = playList.coverImageUrl; //установить расширение картинке обложки
// playListCoverEl.style.width = "200px";
// playListCoverEl.style.height = "200px";
// document.body.append(playListCoverEl);


// const tracksListEl = document.createElement("ul"); //список

// const track_1_El = document.createElement("li");
// track_1_El.append(playList.tracks[0].artistName + ": " + playList.tracks[0].trackTitle); //добавление артиста

// const track_2_El = document.createElement("li");
// track_2_El.append(playList.tracks[1].artistName + ": " + playList.tracks[1].trackTitle);


// tracksListEl.append(track_1_El, track_2_El);
// document.body.append(tracksListEl);

function renderPlayList(anyPlayList) {
    renderPlayListHeader(anyPlayList.playListInfo) // мы возьмем плэй лист какой то и передадим из него инфу
    renderTrack(anyPlayList.tracks[0])
    renderTrack(anyPlayList.tracks[1])
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleEl = document.createElement("h1"); //создание заголовка
    playListTitleEl.append(anyPlayListInfo.title);
    document.body.append(playListTitleEl);


    const playListCoverEl = document.createElement("img"); //обложка
    playListCoverEl.src = anyPlayListInfo.coverImageUrl; //установить расширение картинке обложки
    playListCoverEl.style.width = "200px";
    playListCoverEl.style.height = "200px";
    document.body.append(playListCoverEl)
}

function renderTrack(anyTrack) {

    const trackEl = document.createElement("div");
    const cover = document.createElement('img');
    cover.style.width = "70px";
    cover.src = anyTrack.trackCoverImageUrl;
    trackEl.append(cover);
    trackEl.append(anyTrack.artistName + ": " + playList.tracks[0].trackTitle);

    const audio = document.createElement("audio");
    audio.src = anyTrack.trackFileUrl;
    audio.controls = true //показать элементы управления
    trackEl.append(audio);
    document.body.append(trackEl)
}




renderPlayList(playList);