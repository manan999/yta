import React from 'react' ;

const Video = ({video}) => {
	const src = `https://www.youtube.com/embed/${video.id.videoId}`

	return (
		<div>
			<div className="ui embed">
				<iframe title="yt-iframe" src={src} />
			</div>
			<div className="ui segment">
				<h3 className="ui header">{video.snippet.title}</h3>
				<h4> <strong> {video.snippet.channelTitle} </strong></h4>
				<p> Uploaded on : {video.snippet.publishedAt.slice(0, 10)} </p>
				<p> {video.snippet.description} </p>
			</div>
		</div>
		) ;
}

export default Video ;