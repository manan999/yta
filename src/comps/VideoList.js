import React from 'react' ;
import VideoItem from './VideoItem.js' ;

const VideoList = ({videos, onSelect}) => {
	videos = videos.splice(1, videos.length -1)
	return (
		<div className="ui relaxed divided list">
			{
				videos.map( (video, i) => {
					return (<VideoItem key={i} title={video.snippet.title} tn={video.snippet.thumbnails} 
									   onSelect={onSelect} channel={video.snippet.channelTitle} 
									   date={video.snippet.publishedAt} video={video}/>) ;
				}) 
			}
		</div>
		) ;
}

export default VideoList ;