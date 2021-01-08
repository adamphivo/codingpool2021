import {youtubePlayerTools} from "./src/YoutubePlayer";

(function (Drupal) { // closure
    'use strict';

    // Player Youtube
    Drupal.behaviors.youtubePlayer = youtubePlayerTools;
}(Drupal));