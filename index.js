import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,

} from 'react-360';
import VideoModule from 'VideoModule';

const VIDEO_PLAYER = 'dash_video';
const VIDEO_SOURCE = [
  {
    url: asset('video_dash_mp4/video_stream.mpd').uri,
    src: asset('video_dash_mp4/video_stream.mpd').uri,
    fileFormat: 'mp4',
  },
  // {
  //   url: asset('video_dash_webm/video_stream.mpd').uri,
  //   src: asset('video_dash_webm/video_stream.mpd').uri,
  //   fileFormat: 'webm',
  // }
];




export default class Live360 extends React.Component {


  componentWillMount() {
    const player = VideoModule.createPlayer(VIDEO_PLAYER);
    VideoModule.play(VIDEO_PLAYER, {
      source: VIDEO_SOURCE,
      stereo: '2D',
      //source: { url: 'static_assets/video.mp4', fileFormat: 'mp4' },
    });
    // player.setMuted(false);
    // player.setVolume(1);
    Environment.setBackgroundVideo(VIDEO_PLAYER);
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Live360', () => Live360);
