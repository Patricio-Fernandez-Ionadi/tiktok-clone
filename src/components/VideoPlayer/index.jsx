import clsx from 'clsx'
import React, { useRef } from 'react'

import styles from './styles.module.css'

import VideoDescription from '../VideoDescription'
import VideoPlayerActions from './VideoPlayerActions'
import { useIntersectionVideoPlayer } from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer({
	src,
	albumCover,
	username,
	description,
	songTitle,
	avatar,
	likes,
	shares,
	comments,
}) {
	const video = useRef(null)

	const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

	const playerClassName = clsx(styles.player, {
		[styles.hidden]: playing,
	})

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
			<VideoPlayerActions
				avatar={avatar}
				username={username}
				likes={likes}
				comments={comments}
				shares={shares}
			/>
			<VideoDescription
				albumCover={albumCover}
				username={username}
				description={description}
				songTitle={songTitle}
			/>
		</div>
	)
}
