import clsx from 'clsx'
import React, { useRef, useState } from 'react'

import styles from './styles.module.css'

import VideoDescription from '../VideoDescription'
import VideoPlayerActions from './VideoPlayerActions'

export default function VideoPlayer({
	src,
	albumCover,
	username,
	description,
	songTitle,
}) {
	const [playing, setPlaying] = useState(false)
	const video = useRef(null)

	const playerClassName = clsx(styles.player, {
		[styles.hidden]: playing,
	})

	const handlePlay = () => {
		const { current: videoElement } = video

		playing ? videoElement.pause() : videoElement.play()

		setPlaying(!playing)
	}

	return (
		<div className={styles.wrapper}>
			<video
				loop
				className={styles.video}
				src={src}
				ref={video}
				controls={false}
				onClick={handlePlay}
			/>
			<i onClick={handlePlay} className={playerClassName}></i>
			<VideoPlayerActions />
			<VideoDescription
				albumCover={albumCover}
				username={username}
				description={description}
				songTitle={songTitle}
			/>
		</div>
	)
}
