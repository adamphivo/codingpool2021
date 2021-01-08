import {$} from '../../common/drupal/drupal';

class YoutubePlayer {

    /**
     * Initialisation
     * @param mediaVideo
     */
    init(mediaVideo) {

        this.$youtubeApiVars = {
            enablejsapi: 1,
            showinfo: 0,
            rel: 0,
            origin: 'http://localhost',
            controls: 1,
            autoplay: 1,
            playsinline: 1,
            iv_load_policy: 3
        };

        let YTPlayers = [];

        this.addYoutubePlayer(mediaVideo, YTPlayers);
    };


    /**
     * Ajout du player youtube
     * Si l'utilisateur a accepté, on créé le player
     * Sinon on affiche un message
     *
     * @param video
     * @param YTPlayers
     */
    addYoutubePlayer(video, YTPlayers) {
        let videoPlayer = video.find('.MediaVideo-player');
        let videoID = videoPlayer.data('video-id');
        let videoContainerId = videoPlayer.attr('id');

        if (YTPlayers[videoContainerId] === undefined) {
            if (typeof(YT) === 'undefined' || typeof(YT.Player) === 'undefined') {
                // Ajout d'une div avec lien pour ouvrir le pannel
                let $tacMessage = $(video).find('.TacNoCookieMessage');
                if ($tacMessage.length === 0) {
                    video.append(TacHelpers.getPlaceholder(Drupal.t('Vos préférences en matière de cookies ne vous permet pas de visionner cette <b>vidéo Youtube</b>'))).show();
                    video.children('.TacNoCookieMessage').show();
                }
            }
            else {
                YTPlayers[videoContainerId] = new YT.Player(videoContainerId, {
                    videoId: videoID,
                    playerVars: this.$youtubeApiVars
                });

                $(video).find('.js-youtube-player').addClass('hidden');
                video.find('.js-video-img').addClass('invisible');
                video.addClass('video-visible');
            }
        }
    }

    attach(context) {
        if($('.MediaVideo--youtube', context).length) {
            $('.MediaVideo--youtube').on('click', ev => {
                this.init($(ev.currentTarget));
            });
        }
    }
}

export let youtubePlayerTools = new YoutubePlayer();
